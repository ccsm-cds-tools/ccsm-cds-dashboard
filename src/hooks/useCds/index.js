import { useEffect, useState } from 'react';
import { applyPlan, simpleResolver } from 'encender';
import { elmJsonDependencies } from 'services/cql';
import { cdsResources } from 'services/fhir';

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
  let resolver = simpleResolver([...cdsResources, ...patientData], false);
  const planDefinition = resolver('PlanDefinition/CervicalCancerScreening')[0];
  const patientReference = 'Patient/2d0c1024-dee6-416f-af57-9e7544745e83';
  const WorkerFactory = () => {
    return new Worker(new URL('../../../node_modules/cql-worker/src/cql.worker.js', import.meta.url))
  };
  const aux = {
    elmJsonDependencies,
    WorkerFactory 
  };
  const [CarePlan, RequestGroup, ...otherResources] = await applyPlan(planDefinition, patientReference, resolver, aux);
  console.log(CarePlan);
  console.log(RequestGroup);
  console.log(otherResources);
  setOutput(CarePlan);
}