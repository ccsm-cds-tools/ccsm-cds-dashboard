export const ScreeningAndManagementTestType = {
  "resourceType" : "ValueSet",
  "id" : "ScreeningAndManagementTestType",
  "url" : "http://OUR-PLACEHOLDER-URL.com/ValueSet/ScreeningAndManagementTestType",
  "name" : "name",
  "status" : "draft",
  "experimental" : true,
  "date" : "2022-06-27",
  "description" : "description",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "purpose",
  "copyright" : "This content from LOINC ® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use.",
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "version" : "2.72",
      "concept" : [
        {
          "code" : "21440-3",
          "display" : "HPV",
          "designation": {
            "use" : {
              "system" : "http://snomed.info/sct",
              "code" : "900000000000003001",
              "display": "Fully specified name"
            },
            "value" : "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          }
        },
        {
          "code" : "10524-7",
          "display" : "Cervical Cytology (Pap)",
          "designation": {
            "use" : {
              "system" : "http://snomed.info/sct",
              "code" : "900000000000003001",
              "display": "Fully specified name"
            },
            "value" : "Microscopic observation [Identifier] in Cervix by Cyto stain"
          }
        },
        {
          "code" : "65753-6",
          "display" : "Cervical Histology",
          "designation": {
            "use" : {
              "system" : "http://snomed.info/sct",
              "code" : "900000000000003001",
              "display": "Fully specified name"
            },
            "value" : "Cervix Pathology biopsy report"
          }
        }
      ]
    }]
  }
};