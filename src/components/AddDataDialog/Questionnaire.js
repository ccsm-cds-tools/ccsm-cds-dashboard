import { resourceConverter } from 'services/fhir';
import SurveyComponent from './SurveyComponent.js'

export function Questionnaire(props) {
  const { 
    fhirQuestionnaire, 
    handleClose, 
    setPatientData,
    resolver,
    patientReference
  } = props;

  const saveResponses = (fhirQR) => {
    fhirQR.id = getIncrementalId();
    fhirQR.subject = patientReference;
    const convertedResources = resourceConverter(fhirQR, patientReference, getIncrementalId);
    setPatientData(existingData => [...existingData, fhirQR, ...convertedResources]);
    handleClose();
  }

  return (
    <SurveyComponent
      questionnaire={fhirQuestionnaire}
      saveResponses={rsp => saveResponses(rsp)}
      resolver={resolver}
    /> 
  )
}

function* simpleGenerator() {
  let n = 1;
  while (true)
    yield n++;
}

let simpleCounter = simpleGenerator();

function getIncrementalId() {
  return 'ccsm-cds-dashboard-' + simpleCounter.next().value.toString();
}