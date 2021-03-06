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
  console.log('patient data: ', patientData);
  let resolver = simpleResolver([...cdsResources, ...patientData], false);
  const planDefinition = resolver('PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport')[0];
  // TODO: Throw error if there is anything other than 1 patient resource
  const patientReference = 'Patient/' + patientData.filter(pd => pd.resourceType === 'Patient').map(pd => pd.id)[0];
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
  
  console.log('CDS output: ', CarePlan);
  console.log('CDS output: ', RequestGroup);
  console.log('CDS output: ', otherResources);

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