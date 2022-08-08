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
            "system": "http://loinc.org",
            "code": "21440-3",
            "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          }
        },
        {
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "10524-7",
            "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          }
        },
        {
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "65753-6",
            "display": "Cervix Pathology biopsy report"
          }
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
          "answerValue": "HPV"
        },
        {
          "question": "test-type",
          "operator": "=",
          "answerValue": "HPV and Cytology Cotest"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "answerOption": [
        {
          "valueString": "Negative"
        },
        {
          "valueString": "Positive (Not Type 16/18)"
        },
        {
          "valueString": "Positive (Type 16)"
        },
        {
          "valueString": "Positive (Type 18)"
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
          "answerString": "Cervical Cytology (Pap)"
        },
        {
          "question": "test-type",
          "operator": "=",
          "answerValue": "HPV and Cytology Cotest"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "answerOption": [
        {
          "valueString": "NILM"
        },
        {
          "valueString": "LSIL"
        },
        {
          "valueString": "ASC-US"
        },
        {
          "valueString": "ASC-H"
        },
        {
          "valueString": "AGC"
        },
        {
          "valueString": "HSIL"
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
