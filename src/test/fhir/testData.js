export const testData = {
  "susan": {
    "resourceType": "Bundle",
    "id": "avg-risk-screening-due-history",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "2d0c1024-dee6-416f-af57-9e7544745e82",
          "name": [
            {
              "given": [
                "Susan21"
              ],
              "family": "Holden65"
            }
          ],
          "gender": "female",
          "birthDate": "1980-07-10",
          "language": "fr",
          
          
          
          "identifier" : [
            {
              "use" : "usual",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MRN",
                    "display" : "Medical Record Number"
                  }
                ],
                "text" : "Medical Record Number"
              },
              "system" : "http://my.medical.record.number.org",
              "value" : "SH-1947-4883"
            }
          ],
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              extension: [
                {
                  "url": "text",
                  "valueString": "Black or African American"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              extension: [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "38fd8a49-eac2-47c9-8fcd-e4c593c3f16d",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e82"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "373887005",
                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                }
              ],
              "text": "Negative for intraepithelial lesion or malignancy (finding)"
            }
          ],
          "effectiveDateTime": "2016-09-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "38fd8a49-eac2-47c9-8fcd-e4c593c3f16e",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e82"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "373887005",
                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                }
              ],
              "text": "Negative for intraepithelial lesion or malignancy (finding)"
            }
          ],
          "effectiveDateTime": "2011-07-15T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "38fd8a49-eac2-47c9-8fcd-e4c593c3f16f",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e82"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "373887005",
                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                }
              ],
              "text": "Negative for intraepithelial lesion or malignancy (finding)"
            }
          ],
          "effectiveDateTime": "2007-01-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "38fd8a49-eac2-47c9-8fcd-e4c593c3f16g",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e82"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "373887005",
                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                }
              ],
              "text": "Negative for intraepithelial lesion or malignancy (finding)"
            }
          ],
          "effectiveDateTime": "2003-11-07T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "4cefbc8c-5f96-41df-bc74-fb88b5a1c49h",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e82"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "21440-3",
                "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
              }
            ],
            "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "787724008",
                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
            }
          ],
          "effectiveDateTime": "2016-09-22T00:00:00.000Z"
        }
      }
    ]
  },
  "paulina": {
    "resourceType": "Bundle",
    "id": "avg-risk-screening-due-no-history",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "2d0c1024-dee6-416f-af57-9e7544745e81",
          "name": [
            {
              "given": [
                "Paulina58"
              ],
              "family": "Vale56"
            }
          ],
          "gender": "female",
          "birthDate": "1994-01-20",
          "language": "en",
          "identifier" : [
            {
              "use" : "usual",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MRN",
                    "display" : "Medical Record Number"
                  }
                ],
                "text" : "Medical Record Number"
              },
              "system" : "http://my.medical.record.number.org",
              "value" : "PV-7601-6251"
            }
          ],          
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              extension: [
                {
                  "url": "text",
                  "valueString": "White"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              extension: [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ]
        }
      }
    ]
  },
  "lily": {
    "resourceType": "Bundle",
    "id": "post-biopsy-unstructured-data",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "2d0c1024-dee6-416f-af57-9e7544745e80",
          "name": [
            {
              "given": [
                "Lily23"
              ],
              "family": "Flowers68"
            }
          ],
          "gender": "female",
          "birthDate": "1985-11-27",
          "identifier" : [
            {
              "use" : "usual",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MRN",
                    "display" : "Medical Record Number"
                  }
                ],
                "text" : "Medical Record Number"
              },
              "system" : "http://my.medical.record.number.org",
              "value" : "LF-5934-4529"
            }
          ],          
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              extension: [
                {
                  "url": "text",
                  "valueString": "Black or African American"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              extension: [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16d",
          "identifier": [
            {
              "use": ["usual"],
              system: "http://example.com",
              value: "some-identifier"
            }
          ],
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "PAT",
                  "display": "Pathology (gross & histopath, not surgical)"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "65753-6",
                "display": "Cervix Pathology biopsy report"
              }
            ],
            "text": "Cervix Pathology biopsy report"
          },
          "conclusionCode": [],
          "effectiveDateTime": "2021-08-25T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16e",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77379-6",
                "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
              }
            ],
            "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "708298003",
                  "display": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                }
              ],
              "text": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
            }
          ],
          "effectiveDateTime": "2021-08-17T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16f",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "62051000119105",
                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                }
              ],
              "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
            }
          ],
          "effectiveDateTime": "2021-08-17T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16g",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77379-6",
                "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
              }
            ],
            "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "787724008",
                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
            }
          ],
          "effectiveDateTime": "2020-06-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16h",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "62051000119105",
                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                }
              ],
              "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
            }
          ],
          "effectiveDateTime": "2020-06-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "48fd8a49-eac2-47c9-8fcd-e4c593c3f16i",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e80"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77379-6",
                "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
              }
            ],
            "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "787724008",
                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
            }
          ],
          "effectiveDateTime": "2016-10-15T00:00:00.000Z"
        }
      }
    ]
  },
  "joanne": {
    "resourceType": "Bundle",
    "id": "ASCUS or LSIL Then Less Than CIN2 Then HPV Negative NILM Then Positive HPV NILM ASCUS or LSIL - 1 Year Follow Up",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "2d0c1024-dee6-416f-af57-9e7544745e83",
          "name": [
            {
              "given": [
                "Joanne42"
              ],
              "family": "Smith657"
            }
          ],
          "gender": "female",
          "birthDate": "1991-01-01",
          "identifier" : [
            {
              "use" : "usual",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MRN",
                    "display" : "Medical Record Number"
                  }
                ],
                "text" : "Medical Record Number"
              },
              "system" : "http://my.medical.record.number.org",
              "value" : "JS-4955-4059"
            }
          ],      
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "38fd8a49-eac2-47c9-8fcd-e4c593c3f16f",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "21440-3",
                "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
              }
            ],
            "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "720005005",
                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
            }
          ],
          "effectiveDateTime": "2017-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "21fb4abc-a7a4-4107-b0d5-38eaa559e94f",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "62051000119105",
                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                }
              ],
              "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
            }
          ],
          "effectiveDateTime": "2017-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "166319d1-90ad-49c8-b242-5b1f92faa32d",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "65753-6",
                "display": "Cervix Pathology biopsy report"
              }
            ],
            "text": "Cervix Pathology biopsy report"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "285836003",
                  "display": "Cervical intraepithelial neoplasia grade 1 (disorder)"
                }
              ],
              "text": "Cervical intraepithelial neoplasia grade 1 (disorder)"
            }
          ],
          "effectiveDateTime": "2017-05-14T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "3b68868d-af30-46ef-b6b0-abd0d9e6bde0",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "21440-3",
                "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
              }
            ],
            "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "787724008",
                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
            }
          ],
          "effectiveDateTime": "2018-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "64b70b51-c7db-440b-a7a2-101ff3a9180b",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "373887005",
                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                }
              ],
              "text": "Negative for intraepithelial lesion or malignancy (finding)"
            }
          ],
          "effectiveDateTime": "2018-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "4cefbc8c-5f96-41df-bc74-fb88b5a1c49d",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "21440-3",
                "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
              }
            ],
            "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "720005005",
                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                }
              ],
              "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
            }
          ],
          "effectiveDateTime": "2021-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "91a9615f-cff0-44d8-a594-948d7759d3df",
          "subject": {
            "reference": "Patient/2d0c1024-dee6-416f-af57-9e7544745e83"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10524-7",
                "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
              }
            ],
            "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
          },
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "441087007",
                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                }
              ],
              "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
            }
          ],
          "effectiveDateTime": "2021-05-01T00:00:00.000Z"
        }
      }
    ]
  },
  "reese": {
      "resourceType": "Bundle",
      "id": "Test Patient 1",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "a5b8ba12-f9d4-4da0-a034-86a25f38634f",
                  "name": [
                      {
                          "given": [
                              "Reese22"
                          ],
                          "family": "Moore23"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1995-04-03",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "ed183c15-16ba-4925-9ff6-f7b9bfb30c2e",
                  "subject": {
                      "reference": "Patient/a5b8ba12-f9d4-4da0-a034-86a25f38634f"
                  },
                  "status": "amended",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "373887005",
                                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                              }
                          ],
                          "text": "Negative for intraepithelial lesion or malignancy (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-08-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "44cf28ad-e63f-4635-bbdd-793e93405bad",
                  "subject": {
                      "reference": "Patient/a5b8ba12-f9d4-4da0-a034-86a25f38634f"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "787724008",
                                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-08-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "dae80f72-4a90-49f8-9ee1-582aaf7935a3",
                  "subject": {
                      "reference": "Patient/a5b8ba12-f9d4-4da0-a034-86a25f38634f"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441087007",
                                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-07-12T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "c1bed50e-e099-4d5f-a07e-fdac016959c0",
                  "subject": {
                      "reference": "Patient/a5b8ba12-f9d4-4da0-a034-86a25f38634f"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-07-12T00:00:00.000Z"
              }
          }
      ]
  },
  "olivia": {
      "resourceType": "Bundle",
      "id": "Test Patient 7",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "b0d65a87-8ec9-4d73-930e-b1dd925360ca",
                  "name": [
                      {
                          "given": [
                              "Olivia24"
                          ],
                          "family": "Martin25"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1991-06-12",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "0e104166-2631-4883-88fe-fb686a02f52a",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-10-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "99ff2fb8-bece-4fa0-8a21-1e6326c308ff",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-10-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Condition",
                  "id": "8ec09ad2-2499-492a-a9b6-398e4ae8f837",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "clinicalStatus": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                              "code": "active",
                              "display": "Active"
                          }
                      ],
                      "text": "Active"
                  },
                  "verificationStatus": {
                      "coding": [
                          {
                              "system": "https://www.hl7.org/fhir/codesystem-condition-ver-status",
                              "code": "confirmed",
                              "display": "Confirmed"
                          }
                      ],
                      "text": "Confirmed"
                  },
                  "code": {
                      "coding": [
                          {
                              "system": "http://hl7.org/fhir/sid/icd-9-cm",
                              "code": "710.0",
                              "display": "Systemic lupus erythematosus"
                          }
                      ],
                      "text": "Systemic lupus erythematosus"
                  },
                  "onsetDateTime": "2017-05-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "8a1322df-5e56-41d4-a9dc-079f5edbabcf",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-09-18T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "77ac45fb-70fe-4d57-a9a4-6e9c43ead90a",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-09-18T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "c8858294-f0c7-4794-9ea9-1b9eb85716a7",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "amended",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "373887005",
                                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                              }
                          ],
                          "text": "Negative for intraepithelial lesion or malignancy (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-08-07T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "7b48ea6e-9b25-40b5-81dd-cf08ab33e3ae",
                  "subject": {
                      "reference": "Patient/b0d65a87-8ec9-4d73-930e-b1dd925360ca"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-08-07T00:00:00.000Z"
              }
          }
      ]
  },
  "meryl": {
      "resourceType": "Bundle",
      "id": "Test Patient 11",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "e4569ec8-8c91-4048-b1d7-ffbb19421013",
                  "name": [
                      {
                          "given": [
                              "Meryl26"
                          ],
                          "family": "Lee27"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1964-08-14",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "b37e5945-912a-43c1-a267-85cccbac17d6",
                  "subject": {
                      "reference": "Patient/e4569ec8-8c91-4048-b1d7-ffbb19421013"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "103646000",
                                  "display": "Atypical endometrial cells of undetermined significance (morphologic abnormality)"
                              }
                          ],
                          "text": "Atypical endometrial cells of undetermined significance (morphologic abnormality)"
                      }
                  ],
                  "effectiveDateTime": "2024-07-19T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "37b8cce7-6253-4660-ae64-f45a9bf18aea",
                  "subject": {
                      "reference": "Patient/e4569ec8-8c91-4048-b1d7-ffbb19421013"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "787724008",
                                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-07-19T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "2af2f525-ac3d-49bc-9df0-3aad51a95bc1",
                  "subject": {
                      "reference": "Patient/e4569ec8-8c91-4048-b1d7-ffbb19421013"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441087007",
                                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-06-03T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "9187ed48-9d77-4271-8cdb-4f94b2abf332",
                  "subject": {
                      "reference": "Patient/e4569ec8-8c91-4048-b1d7-ffbb19421013"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "787724008",
                                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-06-03T00:00:00.000Z"
              }
          }
      ]
  },
  "natalie": {
      "resourceType": "Bundle",
      "id": "Test Patient 10",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "9dc5ead1-6828-4cd1-984e-eda9c633b322",
                  "name": [
                      {
                          "given": [
                              "Natalie28"
                          ],
                          "family": "Clark29"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "2003-04-01",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "e0499c91-c799-48b0-bcf9-e432ace9acf9",
                  "subject": {
                      "reference": "Patient/9dc5ead1-6828-4cd1-984e-eda9c633b322"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441219009",
                                  "display": "Atypical glandular cells on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical glandular cells on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-05-16T00:00:00.000Z"
              }
          }
      ]
  },
  "anne": {
      "resourceType": "Bundle",
      "id": "Test Patient 6",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "04aec7d5-6dc4-4419-9891-c03ca90e580b",
                  "name": [
                      {
                          "given": [
                              "Anne30"
                          ],
                          "family": "Scott31"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1999-09-17",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "a8632d54-c332-496b-a36b-90afe5f5b944",
                  "subject": {
                      "reference": "Patient/04aec7d5-6dc4-4419-9891-c03ca90e580b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-08-08T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "086192fa-2967-4577-aefa-587d40db3b4e",
                  "subject": {
                      "reference": "Patient/04aec7d5-6dc4-4419-9891-c03ca90e580b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "77379-6",
                              "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                          }
                      ],
                      "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708298003",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708299006",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                      }
                  ],
                  "effectiveDateTime": "2024-08-08T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "1004222d-65ba-4615-ae73-3f3fb83b9795",
                  "subject": {
                      "reference": "Patient/04aec7d5-6dc4-4419-9891-c03ca90e580b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441087007",
                                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-04-15T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "9b50ca41-da14-4f1b-a158-c3c1c0ec1a8f",
                  "subject": {
                      "reference": "Patient/04aec7d5-6dc4-4419-9891-c03ca90e580b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "787724008",
                                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-04-15T00:00:00.000Z"
              }
          }
      ]
  },
  "kate": {
      "resourceType": "Bundle",
      "id": "Test Patient 5",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "5e572a2b-1762-47c4-93c3-13dbd58c7935",
                  "name": [
                      {
                          "given": [
                              "Kate32"
                          ],
                          "family": "Hill33"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1997-02-16",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "1898bbaf-ffb9-4254-a0b8-f56b7a91addb",
                  "subject": {
                      "reference": "Patient/5e572a2b-1762-47c4-93c3-13dbd58c7935"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441087007",
                                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-03-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "1a84aaaa-2d90-408f-bd5d-05595701e0c5",
                  "subject": {
                      "reference": "Patient/5e572a2b-1762-47c4-93c3-13dbd58c7935"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-03-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Condition",
                  "id": "1b6f2efb-a5c1-4dfc-80f8-1a60aa32a5d5",
                  "subject": {
                      "reference": "Patient/5e572a2b-1762-47c4-93c3-13dbd58c7935"
                  },
                  "clinicalStatus": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                              "code": "active",
                              "display": "Active"
                          }
                      ],
                      "text": "Active"
                  },
                  "verificationStatus": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                              "code": "confirmed",
                              "display": "Confirmed"
                          }
                      ],
                      "text": "Confirmed"
                  },
                  "code": {
                      "coding": [
                          {
                              "system": "http://snomed.info/sct",
                              "code": "186706006",
                              "display": "Human immunodeficiency virus infection constitutional disease (disorder)"
                          }
                      ],
                      "text": "Human immunodeficiency virus infection constitutional disease (disorder)"
                  },
                  "onsetDateTime": "2018-03-12T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "8067fbe0-94ec-43d5-b486-8a1fcade224e",
                  "subject": {
                      "reference": "Patient/5e572a2b-1762-47c4-93c3-13dbd58c7935"
                  },
                  "status": "amended",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "373887005",
                                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                              }
                          ],
                          "text": "Negative for intraepithelial lesion or malignancy (finding)"
                      }
                  ],
                  "effectiveDateTime": "2019-07-06T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "c485531a-865e-4128-9dc8-c4516118a197",
                  "subject": {
                      "reference": "Patient/5e572a2b-1762-47c4-93c3-13dbd58c7935"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "787724008",
                                  "display": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test negative (finding)"
                      }
                  ],
                  "effectiveDateTime": "2019-07-06T00:00:00.000Z"
              }
          }
      ]
  },
  "scarlett": {
      "resourceType": "Bundle",
      "id": "Test Patient 9",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "029331f9-8cc2-4fbe-94c2-6fa29f47302a",
                  "name": [
                      {
                          "given": [
                              "Scarlett33"
                          ],
                          "family": "Green34"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1966-10-02",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "24b75549-b3af-4f46-9a81-45dbd5773df7",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-29T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "8a7acb18-629e-4419-a651-8505d9d0fb9c",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-29T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "98258907-d867-447e-b798-0213b22d8db9",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-05-15T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "cb3829af-b729-472e-9670-f546095e33f8",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-05-15T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Procedure",
                  "id": "226f960e-6bc1-489f-aaff-452e74932a42",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "completed",
                  "code": {
                      "coding": [
                          {
                              "system": "http://snomed.info/sct",
                              "code": "23140002",
                              "display": "Loop electrosurgical excision procedure of cervix (procedure)"
                          }
                      ],
                      "text": "Loop electrosurgical excision procedure of cervix (procedure)"
                  },
                  "performedDateTime": "2022-12-15T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "02bc5f6b-4b32-4788-9e0d-a71ea57a1266",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "65753-6",
                              "display": "Cervix Pathology biopsy report"
                          }
                      ],
                      "text": "Cervix Pathology biopsy report"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "20365006",
                                  "display": "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
                              }
                          ],
                          "text": "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
                      }
                  ],
                  "effectiveDateTime": "2022-11-18T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "fc5e145f-d6cf-45ef-9338-cbbb1aad9b42",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62061000119107",
                                  "display": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2022-06-18T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "c5108d61-a5c5-4688-9f46-401aaf9b8236",
                  "subject": {
                      "reference": "Patient/029331f9-8cc2-4fbe-94c2-6fa29f47302a"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2022-06-18T00:00:00.000Z"
              }
          }
      ]
  },
  "dua": {
      "resourceType": "Bundle",
      "id": "Test Patient 13",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "fef452dd-c3fb-4a25-a6ce-d277e2b11845",
                  "name": [
                      {
                          "given": [
                              "Dua35"
                          ],
                          "family": "Hall36"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "2002-03-17",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "dce3df97-9a0a-4463-a9b1-ea33fcdfc67c",
                  "subject": {
                      "reference": "Patient/fef452dd-c3fb-4a25-a6ce-d277e2b11845"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2022-04-15T00:00:00.000Z"
              }
          }
      ]
  },
  "julia": {
      "resourceType": "Bundle",
      "id": "Test Patient 12",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "afc4c1d2-bc49-4a2c-b1a8-d85db671c394",
                  "name": [
                      {
                          "given": [
                              "Julia37"
                          ],
                          "family": "Evans38"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1992-04-18",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "b03ce98c-60b8-45c7-bc5a-ca2601680504",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441088002",
                                  "display": "Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-09-10T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "e9cbc3c1-599e-42a9-9f1d-c51e6d707436",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-09-10T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Condition",
                  "id": "e11efe04-ae28-4e58-b555-7e5ed68ae87d",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "clinicalStatus": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                              "code": "active",
                              "display": "Active"
                          }
                      ],
                      "text": "Active"
                  },
                  "verificationStatus": {
                      "coding": [
                          {
                              "system": "https://www.hl7.org/fhir/codesystem-condition-ver-status",
                              "code": "confirmed",
                              "display": "Confirmed"
                          }
                      ],
                      "text": "Confirmed"
                  },
                  "code": {
                      "coding": [
                          {
                              "system": "http://OUR-PLACEHOLDER-URL.com",
                              "code": "GenitalGvHD",
                              "display": "Diagnosis of Genital GvHD"
                          }
                      ],
                      "text": "Diagnosis of Genital GvHD"
                  },
                  "onsetDateTime": "2017-05-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "80d5369f-1302-4446-a0f5-e9b7f742ea22",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-09-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "552fd8a2-c759-41f4-a14b-7d7a5d4334a7",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2023-09-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "0f8a7c7a-96ab-41af-90fc-3aa4853f54c1",
                  "subject": {
                      "reference": "Patient/afc4c1d2-bc49-4a2c-b1a8-d85db671c394"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "65753-6",
                              "display": "Cervix Pathology biopsy report"
                          }
                      ],
                      "text": "Cervix Pathology biopsy report"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "285836003",
                                  "display": "Cervical intraepithelial neoplasia grade 1 (disorder)"
                              }
                          ],
                          "text": "Cervical intraepithelial neoplasia grade 1 (disorder)"
                      }
                  ],
                  "effectiveDateTime": "2022-08-28T00:00:00.000Z"
              }
          }
      ]
  },
  "angelina": {
      "resourceType": "Bundle",
      "id": "Test Patient 8",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "fa6d5cd6-1ac3-452f-811e-7c62360f8092",
                  "name": [
                      {
                          "given": [
                              "Angelina39"
                          ],
                          "family": "Turner40"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1996-07-04",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "fd8f9031-63f8-4b33-84d8-b6681e5bd38c",
                  "subject": {
                      "reference": "Patient/fa6d5cd6-1ac3-452f-811e-7c62360f8092"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441219009",
                                  "display": "Atypical glandular cells on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical glandular cells on cervical Papanicolaou smear (finding)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62061000119107",
                                  "display": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-12T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "9a990086-1dfd-4c11-93fc-9ee9d4627c44",
                  "subject": {
                      "reference": "Patient/fa6d5cd6-1ac3-452f-811e-7c62360f8092"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-12T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "6ac1a076-9771-499d-aebf-8fd92e3977e1",
                  "subject": {
                      "reference": "Patient/fa6d5cd6-1ac3-452f-811e-7c62360f8092"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62061000119107",
                                  "display": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-01-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "c5049d83-ff2d-4859-8911-971c7194e388",
                  "subject": {
                      "reference": "Patient/fa6d5cd6-1ac3-452f-811e-7c62360f8092"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-01-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "7e6403a2-4300-4021-888a-a9fef77818d3",
                  "subject": {
                      "reference": "Patient/fa6d5cd6-1ac3-452f-811e-7c62360f8092"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "65753-6",
                              "display": "Cervix Pathology biopsy report"
                          }
                      ],
                      "text": "Cervix Pathology biopsy report"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "285838002",
                                  "display": "Cervical intraepithelial neoplasia grade 2 (disorder)"
                              }
                          ],
                          "text": "Cervical intraepithelial neoplasia grade 2 (disorder)"
                      }
                  ],
                  "effectiveDateTime": "2023-02-05T00:00:00.000Z"
              }
          }
      ]
  },
  "nicole": {
      "resourceType": "Bundle",
      "id": "Test Patient 4",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "bc32e003-d126-4595-9f53-a491eeb3379b",
                  "name": [
                      {
                          "given": [
                              "Nicole41"
                          ],
                          "family": "Parker42"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1982-05-16",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "ac38571c-48a4-447b-b9d2-49795c202d91",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "1162767002",
                                  "display": "Squamous cell carcinoma (morphologic abnormality)"
                              }
                          ],
                          "text": "Squamous cell carcinoma (morphologic abnormality)"
                      }
                  ],
                  "effectiveDateTime": "2024-09-17T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "5cb1cfcb-42f0-4c51-a619-daa8bf21e56b",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "77379-6",
                              "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                          }
                      ],
                      "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708298003",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708299006",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                      }
                  ],
                  "effectiveDateTime": "2024-09-17T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "6edbda5f-f98d-4007-93ba-e4967eba6cf5",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62061000119107",
                                  "display": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "High grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-03-02T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "b985c4ed-1ecc-4163-8eaf-9766a9a5a1b7",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "77379-6",
                              "display": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                          }
                      ],
                      "text": "Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708298003",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
                      },
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "708299006",
                                  "display": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                              }
                          ],
                          "text": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                      }
                  ],
                  "effectiveDateTime": "2024-03-02T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Procedure",
                  "id": "d08fbd0d-a890-4f96-a740-b24f85f6e49d",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "completed",
                  "code": {
                      "coding": [
                          {
                              "system": "http://snomed.info/sct",
                              "code": "23140002",
                              "display": "Loop electrosurgical excision procedure of cervix (procedure)"
                          }
                      ],
                      "text": "Loop electrosurgical excision procedure of cervix (procedure)"
                  },
                  "performedDateTime": "2023-08-22T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "32af77cf-cc7f-43a9-b96e-676a67b5d6d2",
                  "subject": {
                      "reference": "Patient/bc32e003-d126-4595-9f53-a491eeb3379b"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "65753-6",
                              "display": "Cervix Pathology biopsy report"
                          }
                      ],
                      "text": "Cervix Pathology biopsy report"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "20365006",
                                  "display": "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
                              }
                          ],
                          "text": "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
                      }
                  ],
                  "effectiveDateTime": "2023-08-06T00:00:00.000Z"
              }
          }
      ]
  },
  "mila": {
      "resourceType": "Bundle",
      "id": "Test Patient 3",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "38539a1f-3a61-4c03-a27d-cc3d81707e9d",
                  "name": [
                      {
                          "given": [
                              "Mila43"
                          ],
                          "family": "Murphy44"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1989-08-07",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "99e1ee02-6fe4-42c1-9bc9-39365a66bd53",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "254890008",
                                  "display": "Adenocarcinoma in situ of cervix (disorder)"
                              }
                          ],
                          "text": "Adenocarcinoma in situ of cervix (disorder)"
                      }
                  ],
                  "effectiveDateTime": "2024-05-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "Condition",
                  "id": "3c74f030-5859-427d-bc30-f728ffb29ed5",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "clinicalStatus": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                              "code": "active",
                              "display": "Active"
                          }
                      ],
                      "text": "Active"
                  },
                  "verificationStatus": {
                      "coding": [
                          {
                              "system": "https://www.hl7.org/fhir/codesystem-condition-ver-status",
                              "code": "confirmed",
                              "display": "Confirmed"
                          }
                      ],
                      "text": "Confirmed"
                  },
                  "code": {
                      "coding": [
                          {
                              "system": "http://hl7.org/fhir/sid/icd-10-cm",
                              "code": "K50",
                              "display": "Crohn's disease [regional enteritis]"
                          }
                      ],
                      "text": "Crohn's disease [regional enteritis]"
                  },
                  "onsetDateTime": "2017-05-01T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "71b451d8-b47c-40df-ae93-f5ba068af32c",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-05-04T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "0a2c80db-f080-48fd-9a23-dedc08942717",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "65753-6",
                              "display": "Cervix Pathology biopsy report"
                          }
                      ],
                      "text": "Cervix Pathology biopsy report"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "285838002",
                                  "display": "Cervical intraepithelial neoplasia grade 2 (disorder)"
                              }
                          ],
                          "text": "Cervical intraepithelial neoplasia grade 2 (disorder)"
                      }
                  ],
                  "effectiveDateTime": "2024-01-02T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "837044f7-ea04-4f36-893c-bed2fbac3065",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "62051000119105",
                                  "display": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2022-04-06T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "311138f7-ca29-474e-ad25-750536935b56",
                  "subject": {
                      "reference": "Patient/38539a1f-3a61-4c03-a27d-cc3d81707e9d"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2022-04-06T00:00:00.000Z"
              }
          }
      ]
  },
  "jennifer": {
      "resourceType": "Bundle",
      "id": "Test Patient 2",
      "type": "collection",
      "entry": [
          {
              "resource": {
                  "resourceType": "Patient",
                  "id": "349df6d6-ce46-41d8-9ecf-9f93b63c4cc6",
                  "name": [
                      {
                          "given": [
                              "Jennifer45"
                          ],
                          "family": "Reed46"
                      }
                  ],
                  "gender": "female",
                  "birthDate": "1992-06-05",
                  "extension": [
                      {
                          "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                          "valueCode": "F"
                      }
                  ]
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "49b90636-b7f7-46ee-8416-15ccd723d5bd",
                  "subject": {
                      "reference": "Patient/349df6d6-ce46-41d8-9ecf-9f93b63c4cc6"
                  },
                  "status": "amended",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "373887005",
                                  "display": "Negative for intraepithelial lesion or malignancy (finding)"
                              }
                          ],
                          "text": "Negative for intraepithelial lesion or malignancy (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-02T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "572ee5ee-bedf-4bdd-a596-20bd7d1108bf",
                  "subject": {
                      "reference": "Patient/349df6d6-ce46-41d8-9ecf-9f93b63c4cc6"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2024-06-02T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "fb0db18e-be3c-441e-b083-d4fec8c57c5a",
                  "subject": {
                      "reference": "Patient/349df6d6-ce46-41d8-9ecf-9f93b63c4cc6"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "10524-7",
                              "display": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                          }
                      ],
                      "text": "Microscopic observation [Identifier] in Cervix by Cyto stain"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "441087007",
                                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                              }
                          ],
                          "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-01-03T00:00:00.000Z"
              }
          },
          {
              "resource": {
                  "resourceType": "DiagnosticReport",
                  "id": "6d7c9076-afd3-44eb-b3e7-43a2b9927bdc",
                  "subject": {
                      "reference": "Patient/349df6d6-ce46-41d8-9ecf-9f93b63c4cc6"
                  },
                  "status": "final",
                  "code": {
                      "coding": [
                          {
                              "system": "http://loinc.org",
                              "code": "21440-3",
                              "display": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                          }
                      ],
                      "text": "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
                  },
                  "conclusionCode": [
                      {
                          "coding": [
                              {
                                  "system": "http://snomed.info/sct",
                                  "code": "720005005",
                                  "display": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                              }
                          ],
                          "text": "Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)"
                      }
                  ],
                  "effectiveDateTime": "2021-01-03T00:00:00.000Z"
              }
          }
      ]
  }
}