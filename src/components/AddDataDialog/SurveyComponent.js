import converter from 'questionnaire-to-survey'
import { FunctionFactory, Model, Serializer, StylesManager, Survey } from 'survey-react'
import "survey-react/defaultV2.min.css";
import "./SurveyComponent.scss";

export default function SurveyComponent(props) {
  let {questionnaire, saveResponses} = props;

  // Create SurveyJS object from a FHIR Questionnaire
  const reactConverter = converter(FunctionFactory, Model, Serializer, StylesManager);
  console.log(questionnaire);
  var model = reactConverter(questionnaire, null, 'defaultV2');

  // Set SurveyJS settings
  model.showQuestionNumbers = 'off';
  model.completeText = 'Submit';
  model.clearInvisibleValues = 'onHidden';
  model.requiredText = '';

  return (
    <Survey
      id="survey-root"
      model={model}
      showCompletedPage={false}
      onComplete={data=>saveResponses(data.valuesHash)}
    />   
  )
}