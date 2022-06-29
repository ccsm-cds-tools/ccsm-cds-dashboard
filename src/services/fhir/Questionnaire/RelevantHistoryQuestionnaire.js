export const RelevantHistoryQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "RelevantHistoryQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/RelevantHistoryQuestionnaire",
  "version": "1.0.0",
  "name": "RelevantHistoryQuestionnaire",
  "title": "Relevant History Questionnaire",
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
      "text": "Add Relevant Condition",
      "type": "choice",
      "answerOption": [
        {
          "valueString": "Condition 1..."
        },
        {
          "valueString": "Condition 2..."
        },
        {
          "valueString": "Some condition 3"
        },
        {
          "valueString": "Another condition 4"
        },
        {
          "valueString": "Condition 5"
        }
      ]
    },
    {
      "linkId": "2",
      "text": "Date",
      "type": "string"
    },
    {
      "linkId": "3",
      "text": "Notes",
      "type": "string"
    },
    {
      "linkId": "4",
      "text": "Some Option",
      "type": "boolean"
    }
  ]
}
