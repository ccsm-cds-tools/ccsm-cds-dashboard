export const CervicalCancerScreeningImmunocompromisedIndividuals = {
  "resourceType": "PlanDefinition",
  "id": "CervicalCancerScreeningImmunocompromisedIndividuals",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
      "valueCode": "executable"
    },
    {
      "url": "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
      "valueCode": "structured"
    }
  ],
  "version": "1.0.0",
  "date": "2021-09-14",
  "status": "draft",
  "experimental": true,
  "publisher": "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention.",
  "copyright": "(C) 2021 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited. Unless otherwise noted, this work is available under an Apache 2.0 license. It was produced by the MITRE Corporation for the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention in accordance with the Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.",
  "approvalDate": "2021-09-14",
  "lastReviewDate": "2021-09-14",
  "author": [
    {
      "name": "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention."
    }
  ],
  "editor": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "reviewer": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "endorser": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "url": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningImmunocompromisedIndividuals",
  "name": "CervicalCancerScreeningImmunocompromisedIndividuals",
  "title": "USPSTF Recommendations for Cervical Cancer Screening of Individuals with Average Risk",
  "type": {
    "coding": [
      {
        "code": "eca-rule",
        "system": "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        "display": "ECA Rule"
      }
    ]
  },
  "description": "Natural language description of the plan definition",
  "useContext": [
    {
      "code": {
        "code": "gender",
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "display": "Gender"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "F",
            "system": "http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender",
            "display": "Female"
          }
        ]
      }
    },
    {
      "code": {
        "code": "age",
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "display": "Age Range"
      },
      "valueRange": {
        "low": {
          "value": 21,
          "code": "a",
          "system": "http://unitsofmeasure.org",
          "unit": "year"
        }
      }
    }
  ],
  "purpose": "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient???s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., ???Management CDS???), which provides evidence-based care recommendations if screening results are ???abnormal???.",
  "usage": "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians).",
  "topic": [
    {
      "text": "Preventive Medicine"
    },
    {
      "text": "Public Health"
    },
    {
      "text": "Cervical Cancer"
    },
    {
      "text": "Cancer Screening"
    }
  ],
  "relatedArtifact": [
    {
      "type": "citation",
      "label": "Immunocompromised",
      "display": "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
    },
    {
      "type": "citation",
      "label": "Immunocompromised",
      "display": "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
    }
  ],
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/ScreeningImmunocompromisedLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Cervical Cancer Screening Actions",
      "description": "Brief description of the action",
      "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
      "documentation": [
        {
          "type": "citation",
          "label": "Immunocompromised",
          "display": "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
        },
        {
          "type": "citation",
          "label": "Immunocompromised",
          "display": "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
        }
      ],
      "trigger": [
        {
          "type": "named-event",
          "name": "encounter-start"
        }
      ],
      "condition": [
        {
          "kind": "applicability",
          "expression": {
            "language": "text/cql",
            "expression": "IsIncludedAndNotExcluded",
            "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
          }
        }
      ],
      "action": [
        {
          "title": "Display pertinent medical history",
          "description": "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory|1.0.0"
        },
        {
          "title": "Screening recommendations",
          "description": "Make screening recommendations for immunocompromised individuals",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateUnstructuredRecommendations|1.0.0",
          "dynamicValue": [
            {
              "path": "payload[0].contentString",
              "expression": {
                "language": "text/cql",
                "expression": "RecommendationText",
                "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
              }
            }
          ]
        },
        {
          "title": "Screening recommendations",
          "description": "Provide recommendation options for the patient's next screening",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
              }
            }
          ],
          "groupingBehavior": "visual-group",
          "selectionBehavior": "at-most-one",
          "action": [
            {
              "title": "Cervical cytology",
              "description": "Brief description of the action",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "condition": [
                {
                  "kind": "applicability",
                  "expression": {
                    "language": "text/cql",
                    "expression": "RecommendImmediateCervicalCytology",
                    "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
                  }
                }
              ],
              "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCytologyScreeningRecommendation|1.0.0"
            },
            {
              "title": "Cotesting (cytology + HPV)",
              "description": "Brief description of the action",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "condition": [
                {
                  "kind": "applicability",
                  "expression": {
                    "language": "text/cql",
                    "expression": "RecommendImmediateCotesting",
                    "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
                  }
                }
              ],
              "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefintion/CotestingScreeningRecommendation|1.0.0"
            },
            {
              "title": "Provide more information",
              "description": "Brief description of the action",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation|1.0.0"
            }
          ]
        },
        {
          "title": "Handle Errors",
          "description": "Brief description of the action",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "ErrorsHaveOccurred",
                "reference": "Library/ScreeningImmunocompromisedLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/HandleErrors|1.0.0"
        }
      ]
    }
  ]
}
