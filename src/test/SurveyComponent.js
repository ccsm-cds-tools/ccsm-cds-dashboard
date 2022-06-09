import React from 'react'
import converter from 'questionnaire-to-survey'
import { FunctionFactory, Model, Serializer, StylesManager, Survey } from 'survey-react'
import "survey-react/defaultV2.css";

export default function SurveyComponent(props) {
  let {questionnaire, showCompletedPage} = props;

  // Create SurveyJS object from a FHIR Questionnaire
  const reactConverter = converter(FunctionFactory, Model, Serializer, StylesManager);
  var model = reactConverter(questionnaire)

  // Apply Styling to Survey
  StylesManager.applyTheme("bootstrapmaterial");
  // StylesManager.applyTheme("defaultV2");

  // Set SurveyJS settings
  model.showQuestionNumbers = 'off';
  model.completeText = 'Submit';
  model.clearInvisibleValues = 'onHidden';
  model.requiredText = '';
  model.completedHtml = '<h3>Questionnaire Response Has Been Generated!</h3><h4>You may now return to patient page.</h4>';
  // model.goNextPageAutomatic = 'autogonext';

  return (
    <Survey
      model={model}
      showCompletedPage={false}
      onComplete={data=>showCompletedPage(data.valuesHash)}
    />   
  )
}