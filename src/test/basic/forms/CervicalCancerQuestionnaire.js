export const CervicalCancerQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "CervicalCancerQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation",
  "version": "1.0.0",
  "name": "CervicalCancerQuestionnaire",
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
      "text": "Is the patient experiencing abnormal uterine or vaginal bleeding today?",
      "type": "boolean"
    },
    {
      "linkId": "2",
      "text": "Does the patient have visible uterine or vaginal lesions?",
      "type": "boolean"
    },
    {
      "linkId": "3",
      "text": "Did the patient experience in utero exposure to diethylstilbesterol (DES)?",
      "type": "boolean"
    },
    {
      "linkId": "4",
      "text": "Does the patient have a future pregnancy concern?",
      "type": "boolean"
    }
  ]
}
