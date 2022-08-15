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
    let convertedResources = resourceConverter(fhirQR, patientReference, getIncrementalId);
    let convertedIds = convertedResources.map(rsrc => rsrc.id);
    setPatientData(existingData => {
      let amendedData = [];
      existingData.forEach(ed =>{
        if (convertedIds.includes(ed.id)) {
          const match =  convertedResources.filter(cr => cr.id === ed.id)[0];
          const resourceToMerge = {
            ...ed,
            ...match,
            identifier: [
              ...(ed?.identifier ?? []),
              ...(match?.identifier ?? [])
            ]
          };
          convertedResources = [
            ...convertedResources.filter(cr => cr.id !== ed.id),
            resourceToMerge
          ];
          convertedIds = convertedResources.map(rsrc => rsrc.id);
        }
        else amendedData = [...amendedData, ed];
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