import { useEffect, useState } from 'react';
import { applyPlan, simpleResolver } from 'encender';
import { elmJsonDependencies } from 'services/cql/index.mjs';
import { cdsResources } from 'services/fhir';
import { valueSetJson } from 'services/valuesets';

/**
 * 
 * @param {Object[]} patientData 
 * @returns {Object}
 */
export const useCds = (patientData) => {

  const [output, setOutput] = useState({});

  useEffect(() => {
    console.log('patientData: ', patientData);
    applyCds(patientData, setOutput);
  }, [patientData]);

  return output; 
}

/**
 * 
 * @param {Object[]} patientData 
 * @param {function} setOutput 
 */
const applyCds = async function(patientData, setOutput) {
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
      return cr?.basedOn?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory';
    })[0];
    let CervicalCancerDecisionAids = CommunicationRequests.filter(cr => {
      return cr?.basedOn?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids';
    })[0];
    let Errors = CommunicationRequests.filter(cr => {
      return cr?.basedOn?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors';
    })[0];

    let ServiceRequests = otherResources.filter(otr => otr.resourceType === 'ServiceRequest');
    let PrimaryHpvRequest = ServiceRequests.filter(sr => sr.code.display === 'Primary HPV')[0];
    let CytologyRequest = ServiceRequests.filter(sr => sr.code.display === 'Cytology')[0];
    let CotestRequest = ServiceRequests.filter(sr => sr.code.display === 'Cotest')[0];
    let ColposcopyRequest = ServiceRequests.filter(sr => sr.code.display === 'Colposcopy')[0];
    let SurveillanceRequest = ServiceRequests.filter(sr => sr.code.display === 'Surveillance')[0];
    let TreatmentRequest = ServiceRequests.filter(sr => sr.code.display === 'Treatment')[0];

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
    }

    if (thereAreOutputs) {
      setOutput(
        {
          patientInfo,
          patientHistory,
          decisionAids,
          resolver: (r) => r === '' ? {} : resolver(r),
          patientReference
        }
      );
    }
  }
    
}