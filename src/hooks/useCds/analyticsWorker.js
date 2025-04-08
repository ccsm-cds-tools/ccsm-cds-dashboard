import { applyPlan, simpleResolver } from 'encender';
import { elmJsonDependencies } from 'services/cql/index.mjs';
import { cdsAnalyticsResources } from 'services/fhir';
import { valueSetJson } from 'services/valuesets';
import { cqlParameters } from "./cqlParameters";

self.onmessage = async ({ data: { patientData, patientReference } }) => {
  const WorkerFactory = () => {
    return new Worker(new URL('../../../node_modules/cql-worker/src/cql.worker.js', import.meta.url))
  };
  const aux = {
    elmJsonDependencies,
    valueSetJson,
    WorkerFactory,
    cqlParameters
  };

  let resolver = simpleResolver([...cdsAnalyticsResources, ...patientData], false);
  const analyticsPlanDefinition = resolver('PlanDefinition/CervicalCancerAnalytics')[0];

 const [...otherAnalyticsResources] = await applyPlan(analyticsPlanDefinition, patientReference, resolver, aux);
 let AnalyticsCommunicationRequests = otherAnalyticsResources.filter(otr => otr.resourceType === 'CommunicationRequest');
 let Analytics = AnalyticsCommunicationRequests.filter(cr => {
    return cr?.basedOn[0]?.reference === 'http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/OutputAnalytics';
  })[0];
  let analyticsOutput = Analytics?.payload[0].contentString
  self.postMessage({
    analyticsOutput
  });
}
