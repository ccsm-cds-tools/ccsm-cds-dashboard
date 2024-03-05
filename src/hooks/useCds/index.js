import { useEffect, useState } from 'react';
import { applyPlan, simpleResolver } from 'encender';
import { elmJsonDependencies } from 'services/cql/index.mjs';
import { cdsResources } from 'services/fhir';
import { valueSetJson } from 'services/valuesets';
import { translateResponse, translateToggleChange } from './translate';
import { stridesData } from './strides';

/**
 *
 * @param {Object[]} patientData
 * @returns {Object}
 */
export const useCds = (patientData, toggleStatus) => {

  const [output, setOutput] = useState({});
  const [isLoadingCdsData, setIsLoadingCdsData] = useState(false);
  const [isPregnant, setIsPreganant] = useState(false);

  useEffect(() => {
    if (patientData.length === 0) {
      return;
    }

    setIsLoadingCdsData(true);

    console.log('toggleStatus: ', toggleStatus);
    console.log('patientData before translation: ', patientData);

    if (toggleStatus.isToggleChanged) {
      translateToggleChange(patientData, toggleStatus);
    } else {
      translateResponse(patientData, stridesData);
    }

    console.log('patientData after translation: ', patientData);

    applyCds(patientData, setOutput, setIsLoadingCdsData, toggleStatus.isToggleChanged, isPregnant, setIsPreganant);
  }, [patientData, toggleStatus, isPregnant]);

  return {output, isLoadingCdsData};
}

/**
 *
 * @param {Object[]} patientData
 * @param {function} setOutput
 */
const applyCds = async function(patientData, setOutput, setIsLoadingCdsData, isToggleChanged, isPregnant, setIsPreganant) {
  console.log('Starting applyCds()')

  let resolver = simpleResolver([...cdsResources, ...patientData], false);
  const planDefinition = resolver('PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport')[0];
  // TODO: Throw error if there is anything other than 1 patient resource
  const patientReference = 'Patient/' + patientData.filter(pd => pd.resourceType === 'Patient').map(pd => pd.id)[0];

  if (patientReference !== 'Patient/undefined') {
    const WorkerFactory = () => {
      return new Worker(new URL('../../../node_modules/cql-worker/src/cql.worker.js', import.meta.url))
    };
    const aux = {
      elmJsonDependencies,
      valueSetJson,
      WorkerFactory,
    };

    const [CarePlan, RequestGroup, ...otherResources] = await applyPlan(planDefinition, patientReference, resolver, aux);

    let CommunicationRequests = otherResources.filter(otr => otr.resourceType === 'CommunicationRequest');
    let DisplayCervicalCancerMedicalHistory = CommunicationRequests.filter(cr => {
      return cr?.basedOn[0]?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory';
    })[0];
    let CervicalCancerDecisionAids = CommunicationRequests.filter(cr => {
      return cr?.basedOn[0]?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids';
    })[0];
    let Errors = CommunicationRequests.filter(cr => {
      return cr?.basedOn[0]?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors';
    })[0];

    let ServiceRequests = otherResources.filter(otr => otr.resourceType === 'ServiceRequest');
    let PrimaryHpvRequest = ServiceRequests.filter(sr => sr.code.text === 'Primary HPV')[0];
    let CytologyRequest = ServiceRequests.filter(sr => sr.code.text === 'Cytology')[0];
    let CotestRequest = ServiceRequests.filter(sr => sr.code.text === 'Cotest')[0];
    let ColposcopyRequest = ServiceRequests.filter(sr => sr.code.text === 'Colposcopy')[0];
    let SurveillanceRequest = ServiceRequests.filter(sr => sr.code.text === 'Surveillance')[0];
    let TreatmentRequest = ServiceRequests.filter(sr => sr.code.text === 'Treatment')[0];

    resolver = simpleResolver(
      [
        ...cdsResources,
        ...patientData,
        ...CommunicationRequests,
        ...ServiceRequests
      ],
      false
    );

    console.log('CarePlan: ', CarePlan);
    console.log('RequestGroup: ', RequestGroup);
    console.log('otherResources: ', otherResources);

    let patientInfo={};
    let patientHistory={};
    let decisionAids={};
    let thereAreOutputs = false;

    if (DisplayCervicalCancerMedicalHistory?.payload?.length > 0) {
      let historyString = DisplayCervicalCancerMedicalHistory.payload[0].contentString;
      let history = JSON.parse(historyString);
      patientInfo = history.patientInfo;
      patientHistory = history.patientHistory;
      thereAreOutputs = true;
    }

    if (CervicalCancerDecisionAids?.payload?.length > 0) {
      let decisionsString = CervicalCancerDecisionAids.payload[0].contentString;
      let decisions = JSON.parse(decisionsString);
      decisionAids = decisions;
      decisionAids.suggestedOrders = decisionAids.suggestedOrders.map(so => {
        switch (so) {
          case 'Primary HPV': return {'Primary HPV': 'ServiceRequest/' + PrimaryHpvRequest.id};
          case 'Cytology': return {'Cytology': 'ServiceRequest/' + CytologyRequest.id};
          case 'Cotest': return {'Cotest': 'ServiceRequest/' + CotestRequest.id};
          case 'Colposcopy': return {'Colposcopy': 'ServiceRequest/' + ColposcopyRequest.id};
          case 'Surveillance': return {'Surveillance': 'ServiceRequest/' + SurveillanceRequest.id};
          case 'Treatment': return {'Treatment': 'ServiceRequest/' + TreatmentRequest.id};
          default: return null;
        }
      });
      thereAreOutputs = true;
    } else if (Errors?.payload?.length > 0) {
      let errorString = Errors.payload[0].contentString;
      let errors = JSON.parse(errorString);
      decisionAids = { errors };
      thereAreOutputs = true;
    } else {
      decisionAids = { noRecommendationReturned: true }
    }

    if (thereAreOutputs) {
      if (patientHistory.observations.length > 0) {
        patientHistory.observations = patientHistory.observations.filter(obs => !obs.reference.includes('new-observation-for-'))
      }

      if (isToggleChanged) {
        patientInfo.isPregnant = isPregnant;
      } else {
        setIsPreganant(patientInfo.isPregnant);
      }

      const output = {
        patientInfo,
        patientHistory,
        decisionAids,
        resolver: (r) => r === '' ? {} : resolver(r),
        patientReference
      }

      console.log('CDS output:', output);
      setIsLoadingCdsData(false);
      setOutput(output);

    }
  }

}