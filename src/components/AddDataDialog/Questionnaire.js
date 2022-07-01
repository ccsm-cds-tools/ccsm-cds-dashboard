import { resourceConverter } from 'services/fhir';
import SurveyComponent from './SurveyComponent.js'

export function Questionnaire(props) {
  const { 
    fhirQuestionnaire, 
    handleClose, 
    setPatientData,
    resolver
  } = props;

  const saveResponses = (fhirQR) => {
    const convertedResource = resourceConverter(fhirQR);
    if (convertedResource) setPatientData(existingData => [...existingData, fhirQR, ...convertedResource]);
    else setPatientData(existingData => [...existingData, fhirQR]);
    handleClose();
  }

  return (
    <SurveyComponent
      questionnaire={fhirQuestionnaire}
      saveResponses={rsp=>saveResponses(rsp)}
      resolver={resolver}
    /> 
  )
}
