import SurveyComponent from './SurveyComponent.js'

export function Questionnaire(props) {
  const { 
    fhirQuestionnaire, 
    handleClose, 
    setPatientData,
    resourceConverter,
    resolver
  } = props;

  const saveResponses = (responses) => {
    const fhirQR = responses; //buildQuestionnaireResponse(fhirQuestionnaire, responses);
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
