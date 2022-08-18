import converter, { responser } from 'questionnaire-to-survey'
import { FunctionFactory, ItemValue, Model, Serializer, StylesManager, Survey } from 'survey-react'
import { configureModel } from './configureModel';
import "survey-react/defaultV2.min.css";
import "./SurveyComponent.scss";

export default function SurveyComponent(props) {
  let {
    questionnaire, 
    saveResponses, 
    resolver,
    dataToEdit
  } = props;

  // Create SurveyJS object from a FHIR Questionnaire
  const reactConverter = converter(FunctionFactory, Model, Serializer, StylesManager, resolver);
  var model = reactConverter(questionnaire, null, 'defaultV2');

  // A function for converting SurveyJS outputs into a FHIR QuestionnaireResponse
  const responseConverter = responser(questionnaire, ItemValue);

  let resourceToEdit = resolver(dataToEdit.data);
  model = configureModel(model, resolver, resourceToEdit);

  return (
    <Survey
      id="survey-root"
      model={model}
      showCompletedPage={false}
      onComplete={data => saveResponses(responseConverter(data))}
    />
  )
}
