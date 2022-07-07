import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";

export function resourceConverter(questionnaireResponse, patientReference, getIncrementalId) {

  const testDate = questionnaireResponse.item
    .filter(itm => itm.linkId === 'test-date')
    .flatMap(itm => itm.answer)
    [0].valueDate;

  let codeConclusionPair = [];
  const testTypes = questionnaireResponse.item.filter(itm => itm.linkId === 'test-type').map(itm => itm.answer)[0];
  testTypes.forEach(tt => {

    const coding = tt.valueCoding;

    const shortHandDisplay = ScreeningAndManagementTestType.compose.include[0].concept
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.display)[0];
    
    const linkId = ScreeningAndManagementHistoryQuestionnaire.item
      .filter(itm => itm?.enableWhen?.filter(ew => ew?.answerString === shortHandDisplay)?.length > 0)
      .map (itm => itm?.linkId)[0];

    const conclusion = questionnaireResponse.item
      .filter(itm => itm.linkId === linkId)
      .flatMap(itm => itm.answer)[0].valueCoding;
    
    codeConclusionPair.push({code: coding, conclusion: conclusion});

  });

  let resources = [];
  codeConclusionPair.forEach(ccp => {
    resources.push({
      resourceType: 'DiagnosticReport',
      id: getIncrementalId(),
      status: "amended",
      subject: {
        reference: patientReference
      },
      effectiveDateTime: testDate,
      code: {
        coding: [
          ccp.code
        ]
      },
      conclusionCode: [{
        coding: [ccp.conclusion]
      }]
    })
  });

  return resources;
}

