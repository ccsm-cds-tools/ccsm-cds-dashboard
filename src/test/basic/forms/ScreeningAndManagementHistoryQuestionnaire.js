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
      "answerOption": [
        {
          "valueCoding": {
              "code": "21440-3",
              "system": "http://loinc.org/",
              "display": "HPV"
          }
        },
        {
          "valueCoding": {
              "code": "10524-7",
              "system": "http://loinc.org/",
              "display": "Cervical Cytology (Pap)"
          }
        },
        {
          "valueString": "Cervical Histology"
        }
      ]
    },
    {
      "linkId": "hpv-results",
      "text": "HPV Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerCoding": {
            "code": "21440-3",
            "system": "http://loinc.org/",
            "display": "HPV"
          }
        }
      ],
      "type": "choice",
      "answerOption": [
        {
          "valueCoding": {
            "code": "260385009",
            "system": "http://snomed.info/sct",
            "display": "Negative"
          }
        },
        {
          "valueCoding": {
            "code": "10828004",
            "system": "http://snomed.info/sct",
            "display": "Positive (Not Type 16/18)"
          }
        },
        {
          "valueCoding": {
            "code": "708298003",
            "system": "http://snomed.info/sct",
            "display": "Positive (Type 16)"
          }
        },
        {
          "valueCoding": {
            "code": "708299006",
            "system": "http://snomed.info/sct",
            "display": "Positive (Type 18)"
          }
        }
      ]
    },
    {
      "linkId": "cytology-results",
      "text": "Cytology Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerCoding": {
            "code": "10524-7",
            "system": "http://loinc.org/",
            "display": "Cervical Cytology (Pap)"
          }
        }
      ],
      "type": "choice",
      "answerOption": [
        {
          "valueCoding": {
            "code": "373887005",
            "system": "http://snomed.info/sct",
            "display": "NILM"
          }
        },
        {
          "valueCoding": {
            "code": "62051000119105",
            "system": "http://snomed.info/sct",
            "display": "LSIL"
          }
        },
        {
          "valueCoding": {
            "code": "441087007",
            "system": "http://snomed.info/sct",
            "display": "ASC-US"
          }
        },
        {
          "valueCoding": {
            "code": "441088002",
            "system": "http://snomed.info/sct",
            "display": "ASC-H"
          }
        },
        {
          "valueCoding": {
            "code": "441219009",
            "system": "http://snomed.info/sct",
            "display": "AGC"
          }
        },
        {
          "valueCoding": {
            "code": "62061000119107",
            "system": "http://snomed.info/sct",
            "display": "HSIL"
          }
        }
      ]
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
        }
      ],
      "enableBehavior": "any",
      "type": "date"
    }
  ]
}
