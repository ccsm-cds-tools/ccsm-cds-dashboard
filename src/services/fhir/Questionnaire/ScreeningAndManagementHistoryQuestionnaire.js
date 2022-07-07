export const ScreeningAndManagementHistoryQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "ScreeningAndManagementHistoryQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistory",
  "version": "1.0.0",
  "name": "ScreeningAndManagementHistoryQuestionnaire",
  "title": "Form for capturing additional information from the provider",
  "status": "draft",
  "subjectType": [
    "Practitioner"
  ],
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode",
      "valueCode": "random"
    }
  ],
  "item": [
    {
      "linkId": "test-type",
      "text": "Test Type",
      "required": true,
      "type": "choice",
      "repeats": true,
      "answerValueSet": "ValueSet/ScreeningAndManagementTestType"
    },
    {
      "linkId": "hpv-results",
      "text": "HPV Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "HPV"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "answerValueSet": "ValueSet/HpvTestResult"
    },
    {
      "linkId": "cytology-results",
      "text": "Cytology Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "Cervical Cytology (Pap)"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "answerValueSet": "ValueSet/CervicalCytologyResult"
    },
    {
      "linkId": "histology-results",
      "text": "Histology Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "Cervical Histology"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "answerValueSet": "ValueSet/CervicalHistologyResult"
    },
    {
      "linkId": "test-date",
      "text": "Test Date",
      "required": true,
      "enableWhen": [
        {
          "question": "hpv-results",
          "operator": "exists"
        },
        {
          "question": "cytology-results",
          "operator": "exists"
        },
        {
          "question": "histology-results",
          "operator": "exists"
        }
      ],
      "enableBehavior": "any",
      "type": "date"
    }
  ]
}
