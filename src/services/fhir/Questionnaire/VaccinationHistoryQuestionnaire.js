export const VaccinationHistoryQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "VaccinationHistoryQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/VaccinationHistoryQuestionnaire",
  "version": "1.0.0",
  "name": "VaccinationHistorQuestionnaire",
  "title": "Vaccination History Questionnaire",
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
      "text": "dateTime",
      "type": "dateTime"
    },
    {
      "linkId": "3",
      "text": "date",
      "type": "date"
    },
    {
      "linkId": "4",
      "text": "time",
      "type": "time"
    }
  ]
}
