export const CervicalCancerManagement = {
  "resourceType": "PlanDefinition",
  "id": "CervicalCancerManagement",
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
  "url": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerManagement",
  "name": "CervicalCancerManagement",
  "title": "ASCCP Recommendations for Cervical Cancer Management",
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
  "purpose": "Why this plan definition is defined",
  "usage": "Describes the clinical usage of the plan",
  "topic": [
    {
      "text": "Insert mesh terms here"
    }
  ],
  "relatedArtifact": [
    {
      "type": "citation",
      "label": "ASCCP Recommendation",
      "display": "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
    }
  ],
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/ManagementLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Cervical Cancer Management Actions",
      "description": "Brief description of the action",
      "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
      "documentation": [
        {
          "type": "citation",
          "label": "ASCCP Recommendation",
          "display": "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
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
            "reference": "Library/ManagementLibrary|1.0"
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
          "title": "Management Recommendations",
          "description": "Brief description of the action",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "HasRecommendation",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerManagementActions|1.0.0"
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
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "action": [
            {
              "title": "Communicate Errors",
              "description": "Description",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors|1.0.0",
              "dynamicValue": [
                {
                  "path": "payload[0].content.ofType(string)",
                  "expression": {
                    "language": "text/cql",
                    "expression": "Errors",
                    "reference": "Library/ManagementLibrary|1.0"
                  }
                }
              ]
            },
            {
              "title": "Prompt for More Information",
              "description": "Description",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "groupingBehavior": "visual-group",
              "selectionBehavior": "at-most-one",
              "action": [
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire|1.0.0"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
