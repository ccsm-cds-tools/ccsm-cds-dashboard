import { resourceConverter } from 'services/fhir';
import SurveyComponent from './SurveyComponent.js'

export function Questionnaire(props) {
  const { 
    fhirQuestionnaire, 
    handleClose, 
    setPatientData,
    resolver,
    patientReference,
    dataToEdit
  } = props;

  const saveResponses = (fhirQR) => {
    fhirQR.id = getIncrementalId();
    fhirQR.subject = patientReference;
    const convertedResources = resourceConverter(fhirQR, patientReference, getIncrementalId);
    const convertedIds = convertedResources.map(rsrc => rsrc.id);
    setPatientData(existingData => {
      let amendedData = [];
      existingData.forEach(ed =>{
        if (!convertedIds.includes(ed.id)) amendedData = [...amendedData, ed];
      });

      return [
        ...amendedData, 
        fhirQR, 
        ...convertedResources
      ];
    });
    handleClose();
  }

  return (
    <SurveyComponent
      questionnaire={fhirQuestionnaire}
      saveResponses={rsp => saveResponses(rsp)}
      resolver={resolver}
      dataToEdit={dataToEdit}
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