import React, {useState, useCallback} from 'react'

import fhirQuestionnaire from './data/questionnaire/Questionnaire-ScreeningAndManagementHistoryQuestionnaire.json'
import "survey-react/defaultV2.css";
import SurveyComponent from './SurveyComponent'

export default function Questionnaire() {
  
  const [showPage, setShowPage] = useState(true);

  const onCompletePage = useCallback( (data) => {
    var response = buildQuestionnaireResponse(fhirQuestionnaire, data)
    console.log("QUESTIONNAIRE RESPONSE:", response);
    setShowPage(!showPage);
  }, [showPage])

  const setFinalPage = () => {
    return(
      <div>
        <h3>Questionnaire Response Has Been Generated!</h3>
        <p>Questionnaire response has been logged to the console. You may now return to patient page.</p>
      </div>
    )
  }

  const buildQuestionnaireResponse = (fhirQuestionnaire, data) => {
    // Define the QuestionnaireResponse which will contain the user responses.
    var questionnaireResponse = {
      resourceType: 'QuestionnaireResponse',
      questionnaire: fhirQuestionnaire.url,
      status: 'in-progress',
      item: [],
      authored: new Date().toDateString(),
      // TODO: Add addtional QuestionnaireResponse-level elements
    };
    const questionnaireItems = fhirQuestionnaire.item
    questionnaireItems.forEach(item => {
      if (Object.keys(data).includes(item.linkId)){
        let responseValue = getResponseValue(fhirQuestionnaire, item.linkId, data[item.linkId])
        var qrItem = {
          linkId: item.linkId,
          answer: [
            {
              [responseValue.type]: responseValue.value
            }
          ] 
        }
        // TODO: Add additional item-level elements
        questionnaireResponse.item.push(qrItem)
      }
    })
    return questionnaireResponse;
  }

  function getResponseValue(questionnaire, linkId, response) {
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
  
    return responseValue;
  }

  return (
    <div>
      {
        showPage ?
        <SurveyComponent
          questionnaire={fhirQuestionnaire}
          showCompletedPage={data=>onCompletePage(data)}
        /> :
        setFinalPage()
      }
    </div>  
  )
}
