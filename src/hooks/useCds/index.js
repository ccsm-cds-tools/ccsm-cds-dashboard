import { useEffect, useState } from 'react';
import { applyPlan, simpleResolver } from 'encender';
import { elmJsonDependencies } from 'services/cql/index.mjs';
import { cdsResources } from 'services/fhir';
import { valueSetJson } from 'services/valuesets';

/**
 * 
 * @param {*} patientData 
 * @returns 
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
 * @param {*} patientData 
 * @param {*} setOutput 
 */
const applyCds = async function(patientData, setOutput) {
  console.log('patient data: ', patientData);
  let resolver = simpleResolver([...cdsResources, ...patientData], false);
  const planDefinition = resolver('PlanDefinition/CervicalCancerManagement')[0];
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
  let CommunicationRequest = otherResources.filter(otr => otr.resourceType === 'CommunicationRequest')[0];
  console.log('CDS output: ', CarePlan);
  console.log('CDS output: ', RequestGroup);
  console.log('CDS output: ', otherResources);
  if (CommunicationRequest?.payload?.length > 0) {
    let crp = CommunicationRequest.payload[0].contentString;
    setOutput(
      {
        ...crp,
        resolver: (r) => r === '' ? {} : resolver(r)
      }
    );
  }
    
}