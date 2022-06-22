import SurveyComponent from './SurveyComponent.js'

export function Questionnaire(props) {
  const { fhirQuestionnaire, handleClose, setPatientData } = props;

  const saveResponses = (responses) => {
    let fhirQR = buildQuestionnaireResponse(fhirQuestionnaire, responses);
    setPatientData(existingData => [...existingData, fhirQR]);
    handleClose();
  }

  return (
    <SurveyComponent
      questionnaire={fhirQuestionnaire}
      saveResponses={rsp=>saveResponses(rsp)}
    /> 
  )
}

const buildQuestionnaireResponse = (fhirQuestionnaire, responses) => {
  // Define the QuestionnaireResponse which will contain the user responses.
  let questionnaireResponse = {
    resourceType: 'QuestionnaireResponse',
    questionnaire: fhirQuestionnaire.url,
    status: 'in-progress',
    item: [],
    authored: new Date().toDateString(),
    // TODO: Add addtional QuestionnaireResponse-level elements
  };
  fhirQuestionnaire.item.forEach(item => {
    if (Object.keys(responses).includes(item.linkId)){
      let responseValues = getResponseValues(fhirQuestionnaire, item.linkId, responses[item.linkId]);
      let qrItem = {
        linkId: item.linkId,
        answer: responseValues.map(rv => (
          {
            [rv.type]: rv.value
          }
        ))
      }
      // TODO: Add additional item-level elements
      questionnaireResponse.item.push(qrItem)
    }
  })
  return questionnaireResponse;
}

function getResponseValues(questionnaire, linkId, responses) {
  let responseValues = [];
  responses = Array.isArray(responses) ? responses : [responses];
  responses.forEach(response => {
    let responseValue = {};
    let questionItemIndex = questionnaire.item.findIndex(itm => itm.linkId === linkId);
    let item = questionnaire.item[questionItemIndex];
    if (item.type === 'choice') {
      let answerOptionIndex = item.answerOption.findIndex(itm => {
        if (itm.valueString && itm.valueString === response) return true;
        if (itm.valueCoding && itm.valueCoding.display === response) return true;
        return false;
      });
      if (item.answerOption[answerOptionIndex].valueString) {
        responseValue.type = 'valueString';
        responseValue.value = response;
      } else if (item.answerOption[answerOptionIndex].valueCoding) {
        responseValue.type = 'valueCoding';
        responseValue.value = item.answerOption[answerOptionIndex].valueCoding;
      } // TODO: ELSE THROW ERROR
    } else if (item.type === 'boolean') {
      responseValue.type = 'valueBoolean';
      responseValue.value = response;
    }
    else if (item.type === 'decimal') {
      responseValue.type = 'valueDecimal';
      responseValue.value = response;
    } else {
      responseValue.type = 'valueCoding';    
      responseValue.value = { display: response };
    }
    responseValues.push(responseValue);
  });
  
  console.log(responseValues);
  return responseValues;
}