export const HandleErrors = {
  "resourceType": "PlanDefinition",
  "id": "HandleErrors",
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
  "url": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/HandleErrors",
  "name": "HandleErrors",
  "title": "Handle Errors",
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
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/ScreeningLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Communicate Errors",
      "description": "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard",
      "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
      "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors|1.0.0"
    },
    {
      "title": "Prompt for More Information",
      "description": "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard",
      "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
      "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation|1.0.0"
    }
  ]
}
