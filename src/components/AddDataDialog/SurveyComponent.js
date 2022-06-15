import converter from 'questionnaire-to-survey'
import { FunctionFactory, Model, Serializer, StylesManager, Survey } from 'survey-react'

export default function SurveyComponent(props) {
  let {questionnaire, saveResponses} = props;

  // Create SurveyJS object from a FHIR Questionnaire
  const reactConverter = converter(FunctionFactory, Model, Serializer, StylesManager);
  var model = reactConverter(questionnaire)

  // Apply Styling to Survey
  StylesManager.applyTheme("bootstrapmaterial");

  // Set SurveyJS settings
  model.showQuestionNumbers = 'off';
  model.completeText = 'Submit';
  model.clearInvisibleValues = 'onHidden';
  model.requiredText = '';

  return (
    <Survey
      model={model}
      showCompletedPage={false}
      onComplete={data=>saveResponses(data.valuesHash)}
    />   
  )
}