import converter, { responser } from 'questionnaire-to-survey'
import { FunctionFactory, ItemValue, Model, Serializer, StylesManager, Survey } from 'survey-react'
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

  // Set SurveyJS settings
  model.showQuestionNumbers = 'off';
  model.completeText = 'Submit';
  model.clearInvisibleValues = 'onHidden';
  model.requiredText = '';

  let resourceToEdit = resolver(dataToEdit.data);
  if (resourceToEdit.length > 0) {
    resourceToEdit = resourceToEdit[0];

    let testTypeValueSet = resolver('ValueSet/ScreeningAndManagementTestType')[0];
    let testTypeKey = testTypeValueSet.compose.include[0].concept.filter(cnpt => {
      return resourceToEdit.code.coding.map(cdng => cdng.code).includes(cnpt.code);
    }).map(cnpt => cnpt.display);

    model.data = {
      'diagnostic-report-to-amend': resourceToEdit.id,
      'test-type': testTypeKey,
      'test-date': resourceToEdit.effectiveDateTime.split('T')[0]
    };
  }

  return (
    <Survey
      id="survey-root"
      model={model}
      showCompletedPage={false}
      onComplete={data => saveResponses(responseConverter(data))}
    />
  )
}
