import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";
import { PertinentProcedureShortList } from "./ValueSet/PertinentProcedureShortList";
import { PertinentProcedureQuestionnaire } from "./Questionnaire/PertinentProcedureQuestionnaire";

export function resourceConverter(questionnaireResponse, patientReference, getIncrementalId) {

  let resources = [];

  const linkIds = questionnaireResponse.item.map(itm => itm.linkId);

  if (linkIds.includes('test-date')) {

    const testDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'test-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'diagnostic-report-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;

    let codeConclusionPair = [];
    const testTypes = questionnaireResponse.item.filter(itm => itm.linkId === 'test-type').map(itm => itm.answer)[0];
    testTypes.forEach(tt => {

      const coding = tt.valueCoding;

      const shortHandDisplay = ScreeningAndManagementTestType.compose.include[0].concept
        .filter(cpt => cpt.code === coding.code)
        .map(cpt => cpt.display)[0];
      
      const linkId = ScreeningAndManagementHistoryQuestionnaire.item
        .filter(itm => itm?.enableWhen?.filter(ew => ew?.answerString === shortHandDisplay)?.length > 0)
        .map(itm => itm?.linkId)[0];

      const conclusion = questionnaireResponse.item
        .filter(itm => itm.linkId === linkId)
        .flatMap(itm => itm.answer)[0].valueCoding;
      
      codeConclusionPair.push({code: coding, conclusion: conclusion});

    });

    codeConclusionPair.forEach(ccp => {
      let id = getIncrementalId();
      resources.push({
        resourceType: 'DiagnosticReport',
        id: existingId ?? id,
        identifier: [
          {
            use: ["secondary"],
            system: "http://OUR-PLACEHOLDER-URL.com",
            value: id
          }
        ],
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
  
  } else if (linkIds.includes('procedure-date')) {

    const procedureDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'procedure-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let coding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'procedure-type')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const display = PertinentProcedureShortList.compose.include[0].concept
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.designation[0].value)[0];

    coding.display = display;

    let id = getIncrementalId();
    resources.push({
      resourceType: 'Procedure',
      id: id,
      identifier: [
        {
          use: ["secondary"],
          system: "http://OUR-PLACEHOLDER-URL.com",
          value: id
        }
      ],
      status: "completed",
      subject: {
        reference: patientReference
      },
      performedDateTime: procedureDate,
      code: {
        coding: [coding],
        text: coding.display
      }
    });

  }

  return resources;

}

