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
      "linkId": "1",
      "text": "Test Name/Procedure",
      "type": "choice",
      "answerOption": [
        {
          "valueString": "HPV Test"
        },
        {
          "valueString": "Cytology (Pap)"
        },
        {
          "valueString": "Cervical Biopsy"
        },
        {
          "valueString": "Cervical Histology"
        },
        {
          "valueString": "LEEP Procedure"
        }
      ]
    },
    {
      "linkId": "2",
      "text": "Result/Status",
      "type": "choice",
      "answerOption": [
        {
          "valueString": "Negative"
        },
        {
          "valueString": "Positive (Type Unknown)"
        },
        {
          "valueString": "Positive (Type 16/18)"
        },
        {
          "valueString": "Positive (Type other)"
        }
      ]
    },
    {
      "linkId": "3",
      "text": "Date",
      "type": "string"
    }
  ]
}
