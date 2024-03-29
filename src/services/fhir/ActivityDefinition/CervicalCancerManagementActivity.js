export const CervicalCancerManagementActivity = {
  "resourceType": "ActivityDefinition",
  "id": "CervicalCancerManagementActivity",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
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
  "url": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity",
  "name": "CervicalCancerManagementActivity",
  "title": "CervicalCancerManagementActivity",
  "description": "Natural language description of the activity definition",
  "purpose": "Why this activity definition is defined",
  "usage": "Describes the clinical usage of the activity definition",
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
  "kind": "ServiceRequest",
  "intent": "proposal",
  "priority": "routine",
  "dynamicValue": [
    {
      "path": "orderDetail",
      "expression": {
        "language": "text/cql",
        "expression": "ServiceRequestOrderDetail",
        "reference": "Library/ManagementLibrary|1.0"
      }
    },
    {
      "path": "occurrenceDateTime",
      "expression": {
        "language": "text/cql",
        "expression": "OrderDate",
        "reference": "Library/ManagementLibrary|1.0"
      }
    }
  ]
}
