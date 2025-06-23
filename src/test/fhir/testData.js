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
          "effectiveDateTime": "2019-09-22T00:00:00.000Z"
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
          "effectiveDateTime": "2014-07-15T00:00:00.000Z"
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
          "effectiveDateTime": "2010-01-22T00:00:00.000Z"
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
          "effectiveDateTime": "2006-11-07T00:00:00.000Z"
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
          "effectiveDateTime": "2019-09-22T00:00:00.000Z"
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
          "birthDate": "1996-01-20",
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
          "conclusionCode": [
          ],
          "effectiveDateTime": "2024-08-25T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "cd0501d1-eb02-4da4-823b-23bdaee46528",
          "subject": {
            "reference": "Patient/25592edf-6b2b-43cb-a3e7-1d987a768eea"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "176786003",
                "display": "Colposcopy of cervix (procedure)"
              }
            ],
            "text": "Colposcopy of cervix (procedure)"
          },
          "performedDateTime": "2024-08-25T00:00:00.000Z"
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
          "effectiveDateTime": "2024-08-17T00:00:00.000Z"
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
          "effectiveDateTime": "2024-08-17T00:00:00.000Z"
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
          "effectiveDateTime": "2023-06-10T00:00:00.000Z"
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
          "effectiveDateTime": "2023-06-10T00:00:00.000Z"
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
          "effectiveDateTime": "2019-10-15T00:00:00.000Z"
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
          "effectiveDateTime": "2020-05-01T00:00:00.000Z"
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
          "effectiveDateTime": "2020-05-01T00:00:00.000Z"
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
          "effectiveDateTime": "2020-05-14T00:00:00.000Z"
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
          "effectiveDateTime": "2021-05-01T00:00:00.000Z"
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
          "effectiveDateTime": "2021-05-01T00:00:00.000Z"
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
          "effectiveDateTime": "2024-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "cd0501d1-eb02-4da4-823b-23bdaee46528",
          "subject": {
            "reference": "Patient/25592edf-6b2b-43cb-a3e7-1d987a768eea"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "176786003",
                "display": "Colposcopy of cervix (procedure)"
              }
            ],
            "text": "Colposcopy of cervix (procedure)"
          },
          "performedDateTime": "2020-05-14T00:00:00.000Z"
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
          "effectiveDateTime": "2024-05-01T00:00:00.000Z"
        }
      }
    ]
  },
  "Alice14Winter87": {
    "resourceType": "Bundle",
    "id": "Alice14 Winter87",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Alice14Winter87",
          "name": [
            {
              "given": [
                "Alice14"
              ],
              "family": "Winter87"
            }
          ],
          "gender": "female",
          "birthDate": "1979-06-19",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-3584-1486"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "355d9cb7-5ce8-4dcb-b76c-b759c84b7d10",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2025-04-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "bfc5301e-6c7f-48f4-9df0-2bce7ba66466",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2025-04-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "b3981d90-5757-4e5e-8079-265d18e527a2",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "performedDateTime": "2023-11-16T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "65234c48-a8c9-4bc5-acf3-952642919be8",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2023-10-16T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "6d18223c-40ca-433a-921f-a4167347e5be",
          "subject": {
            "reference": "Patient/Alice14Winter87"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://www.ama-assn.org/go/cpt",
                "code": "57455",
                "display": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
              }
            ],
            "text": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
          },
          "performedDateTime": "2023-10-16T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "ab00fb94-b494-4782-907f-cff05d2f37dc",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2023-09-30T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "4bed584b-4d03-47b0-9441-93ee0a740715",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2023-09-30T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cce7ad18-ab85-4c5d-bd85-00f7346bcd53",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2020-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "9ddf2b5c-4e44-4fc0-aee6-86ceb95b4e8c",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2020-05-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "1cb31622-2ee9-441b-b829-d6f0d23757ce",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2017-06-03T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "e41829fe-2174-41c0-93a2-d484e350c765",
          "subject": {
            "reference": "Patient/Alice14Winter87"
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
          "effectiveDateTime": "2017-06-03T00:00:00.000Z"
        }
      }
    ]
  },
  "Barb23Long56":{
    "resourceType": "Bundle",
    "id": "Barb23 Long56",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Barb23Long56",
          "name": [
            {
              "given": [
                "Barb23"
              ],
              "family": "Long56"
            }
          ],
          "gender": "female",
          "birthDate": "1955-04-21",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Black or African American"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-2272-5664"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2af5601c-2b4f-492a-a789-9569a4138a5c",
          "subject": {
            "reference": "Patient/Barb23Long56"
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
          "effectiveDateTime": "2025-04-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "24153426-4890-42c5-9b1b-327c0f366f20",
          "subject": {
            "reference": "Patient/Barb23Long56"
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
          "effectiveDateTime": "2022-04-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "00f3d0c7-2ce8-4387-abf7-f768f25cf7c3",
          "subject": {
            "reference": "Patient/Barb23Long56"
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
          "effectiveDateTime": "2019-04-03T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "0be3baf6-8b5a-4aae-b08e-52b156a093ee",
          "subject": {
            "reference": "Patient/Barb23Long56"
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
          "effectiveDateTime": "2016-05-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "396877eb-f6a8-49a5-9473-cb0b75dfd85d",
          "subject": {
            "reference": "Patient/Barb23Long56"
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
          "effectiveDateTime": "2014-09-19T00:00:00.000Z"
        }
      }
    ]
  },
  "Bernadette61MacKenzie82":{
    "resourceType": "Bundle",
    "id": "Bernadette61 MacKenzie82",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Bernadette61MacKenzie82",
          "name": [
            {
              "given": [
                "Bernadette61"
              ],
              "family": "MacKenzie82"
            }
          ],
          "gender": "female",
          "birthDate": "1968-06-19",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-2376-6225"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "e0fb96a1-cd3a-40d3-9ce3-d56cab4a54f8",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2025-04-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "f9537b62-15d4-4495-90a4-f2c164cd9779",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2025-04-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "02820cc2-84c5-445a-95c2-542fb928ce1d",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2024-03-14T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "620b80ff-5b26-4de4-ae9d-a6e3bce03e97",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2024-03-14T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "1bfbb4c3-b4f8-40ca-bef6-fa91889f5dd7",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2023-02-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "208edea0-5677-4c79-a070-41a597a2c031",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2023-02-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "23c64cd5-5752-47fe-b508-b87e83d3422a",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "116140006",
                "display": "Total hysterectomy (procedure)"
              }
            ],
            "text": "Total hysterectomy (procedure)"
          },
          "performedDateTime": "2022-01-15T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "fcc16eb6-d6a9-4fb1-8c74-fc7fbb270846",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2021-10-29T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "888d96bd-732a-454d-8c60-cbb574daeba7",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2021-09-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "b4257171-c740-4f51-8528-eb60a98a414f",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2021-09-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "eb9cba9c-b45e-460e-9024-43960dfdd952",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2020-05-14T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "8a94b28d-0706-4c8a-9856-4c14573af1be",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2020-05-14T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "6c075592-1912-4652-8e86-82badd47f72e",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "performedDateTime": "2019-05-20T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "f69b0344-f858-4d8e-9f4a-8ea15db9995e",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2019-04-30T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "945f6306-c4b5-4a86-a31a-53a3cdfb8b5c",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
            }
          ],
          "effectiveDateTime": "2019-04-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "ca1faf18-5641-464e-8820-8d7a9ff868e8",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2019-04-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "43348f71-33c8-4d7b-8433-d390725ad818",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2018-04-28T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "9e1a7c8f-a5eb-4413-b064-dbca0f1e9ae8",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
            }
          ],
          "effectiveDateTime": "2018-04-11T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "423610b0-fa8d-46c2-bde2-d8c7a169d466",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2018-04-11T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "54ed7fa4-b9ef-4335-b807-45cbc6eb1154",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
                  "code": "441087007",
                  "display": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
                }
              ],
              "text": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
            }
          ],
          "effectiveDateTime": "2015-03-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "34b6abd1-9088-44bc-af33-5b2895dbf27d",
          "subject": {
            "reference": "Patient/Bernadette61MacKenzie82"
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
          "effectiveDateTime": "2015-03-01T00:00:00.000Z"
        }
      }
    ]
  },
  "Catherine23Sullivan98": {
    "resourceType": "Bundle",
    "id": "Catherine23 Sullivan98",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Catherine23Sullivan98",
          "name": [
            {
              "given": [
                "Catherine23"
              ],
              "family": "Sullivan98"
            }
          ],
          "gender": "female",
          "birthDate": "1986-02-12",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-2284-7855"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "f6a4dc41-7048-4e63-8871-03e7e7b302ed",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
            }
          ],
          "effectiveDateTime": "2024-12-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "ea83b3ce-c792-4439-81fe-87971b83e066",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2024-12-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "97ac85ac-8689-460f-af63-46233eb3078e",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
          "effectiveDateTime": "2023-11-20T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "6219181d-605a-434c-bd01-3ddd77bb44ba",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2023-11-20T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "972be96b-6a99-40f2-b31c-2521321b5c21",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
          "effectiveDateTime": "2018-10-15T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "fc70dfc4-4a6a-4bdb-b85a-6abf65d2bf9d",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2018-10-15T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "d41756b8-6ba6-4045-a180-c35c9f5aa89d",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
          "effectiveDateTime": "2014-09-15T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "955ec40d-5a50-4ea7-bdef-2095a2bd23f0",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
          "effectiveDateTime": "2011-10-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "64ddb134-6eb1-4046-a00c-fef64e379f9c",
          "subject": {
            "reference": "Patient/Catherine23Sullivan98"
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
          "effectiveDateTime": "2010-08-02T00:00:00.000Z"
        }
      }
    ]
  },
  "Darla43Evans12": {
    "resourceType": "Bundle",
    "id": "Darla43 Evans12",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Darla43Evans12",
          "name": [
            {
              "given": [
                "Darla43"
              ],
              "family": "Evans12"
            }
          ],
          "gender": "female",
          "birthDate": "1990-05-23",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-3275-3826"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "1ba93c0f-b7c8-4e28-a85c-a056f5815a0a",
          "subject": {
            "reference": "Patient/Darla43Evans12"
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
                  "code": "708299006",
                  "display": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
                }
              ],
              "text": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
            }
          ],
          "effectiveDateTime": "2025-01-16T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "b1d6f719-5093-4aa2-aec1-8de4ba3aa431",
          "subject": {
            "reference": "Patient/Darla43Evans12"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2025-01-16T00:00:00.000Z"
        }
      }
    ]
  },
  "Erica94Castellanos87": {
    "resourceType": "Bundle",
    "id": "Erica94 Castellanos87",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Erica94Castellanos87",
          "name": [
            {
              "given": [
                "Erica94"
              ],
              "family": "Castellanos87"
            }
          ],
          "gender": "female",
          "birthDate": "1981-10-25",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-3742-2278"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "61142257-0314-4854-ae6a-faf91dcf33cf",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2025-01-19T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "3e7b12db-7b37-4c72-8ffa-9c785109ee15",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2025-01-19T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2dc7e70e-c38e-4225-a286-451e829cf278",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2020-01-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "b2ca2e53-c5a2-45dd-8dc3-b076df56ec3d",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2020-01-02T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "37e07f8e-105f-4c52-b03d-b95aa36e844a",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2016-10-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "45509462-8d33-4ca6-a46a-e4ee11e1d897",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2016-10-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cc80ba12-338a-4e40-a583-33325d5b536e",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2011-08-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "fa09216b-52b5-4c5f-8bbb-8bc951dc273d",
          "subject": {
            "reference": "Patient/Erica94Castellanos87"
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
          "effectiveDateTime": "2011-08-10T00:00:00.000Z"
        }
      }
    ]
  },
  "Jill34Brown12": {
    "resourceType": "Bundle",
    "id": "Jill34 Brown12",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Jill34Brown12",
          "name": [
            {
              "given": [
                "Jill34"
              ],
              "family": "Brown12"
            }
          ],
          "gender": "female",
          "birthDate": "1986-06-02",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-5455-2769"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "e284fbb2-2a49-4c46-9132-6e1254cce210",
          "subject": {
            "reference": "Patient/Jill34Brown12"
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
          "effectiveDateTime": "2025-01-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "22d4f3a1-b641-4ac9-aeb4-eb8356d08ba3",
          "subject": {
            "reference": "Patient/Jill34Brown12"
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
          "effectiveDateTime": "2025-01-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "20ed1aba-8b0f-4acd-b2da-4b4f12ad5db4",
          "subject": {
            "reference": "Patient/Jill34Brown12"
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
          "effectiveDateTime": "2023-12-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "78a95e76-2705-42c1-8108-f2c0e9743af9",
          "subject": {
            "reference": "Patient/Jill34Brown12"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "392003006",
                "display": "Colposcopy (procedure)"
              }
            ],
            "text": "Colposcopy (procedure)"
          },
          "performedDateTime": "2023-12-10T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "44421eba-8b6b-4e84-98c6-0d78a094f474",
          "subject": {
            "reference": "Patient/Jill34Brown12"
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
          "effectiveDateTime": "2023-12-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "d14b9fc9-d879-48a2-af3c-647ad5ae07b4",
          "subject": {
            "reference": "Patient/Jill34Brown12"
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
          "effectiveDateTime": "2023-12-01T00:00:00.000Z"
        }
      }
    ]
  },
  "Lisa02Danvers12": {
    "resourceType": "Bundle",
    "id": "Lisa02 Danvers12",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Lisa02Danvers12",
          "name": [
            {
              "given": [
                "Lisa02"
              ],
              "family": "Danvers12"
            }
          ],
          "gender": "female",
          "birthDate": "1990-08-19",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Black or African American"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-5478-3268"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "e6a7d285-dca0-411a-8530-5c4c926cabe6",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "performedDateTime": "2025-05-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "df48b132-560a-4178-a84d-958a993baa9d",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2025-04-29T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "b58a470f-beb6-4156-b915-08c537643b04",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://www.ama-assn.org/go/cpt",
                "code": "57455",
                "display": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
              }
            ],
            "text": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
          },
          "performedDateTime": "2025-04-29T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2751ac67-1651-455b-93d2-0fb08933f91a",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2025-04-08T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "af5223fa-7d37-48fc-8601-2c60246b9713",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2025-04-08T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "2e7b6062-3888-4a44-8afb-69da35119c60",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "performedDateTime": "2024-08-11T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "6665b901-e9f3-4dd8-a2af-0b61eef30a7b",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2024-07-04T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "a83041b0-b670-4554-91d6-7520e8419576",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://www.ama-assn.org/go/cpt",
                "code": "57455",
                "display": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
              }
            ],
            "text": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
          },
          "performedDateTime": "2024-07-03T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "0eb67c14-b4d2-4aa6-bda4-3dfbe57ea8d5",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2025-06-21T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "c3ba2e54-f817-42f6-aaac-4c9acbbd8478",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2024-06-21T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "0a7b1b83-9fec-4c6b-ac5c-faf7aef9a75a",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "78203001",
                "display": "Cryosurgery of lesion of cervix (procedure)"
              }
            ],
            "text": "Cryosurgery of lesion of cervix (procedure)"
          },
          "performedDateTime": "2023-12-19T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cc004203-90a5-40fa-b65b-cdda71dcf5d5",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2023-12-13T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "b78c755f-d0f2-4e4f-a079-308e2ca3138e",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://www.ama-assn.org/go/cpt",
                "code": "57455",
                "display": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
              }
            ],
            "text": "Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix"
          },
          "performedDateTime": "2023-11-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "d398d265-6cba-45f0-8920-8cde0fa66a4d",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
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
          "effectiveDateTime": "2023-11-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "233649a2-460f-4bf2-8950-ef03acf74303",
          "subject": {
            "reference": "Patient/Lisa02Danvers12"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2023-11-01T00:00:00.000Z"
        }
      }
    ]
  },
  "Shana11Meyers45": {
    "resourceType": "Bundle",
    "id": "Shana11 Meyers45",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Shana11Meyers45",
          "name": [
            {
              "given": [
                "Shana11"
              ],
              "family": "Meyers45"
            }
          ],
          "gender": "female",
          "birthDate": "1987-05-24",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-7426-6393"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "01629788-d000-49a9-a379-91471b188032",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2025-04-19T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "8d51cebc-702b-48d3-a1cf-69af3aa22035",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "392003006",
                "display": "Colposcopy (procedure)"
              }
            ],
            "text": "Colposcopy (procedure)"
          },
          "performedDateTime": "2025-04-19T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "822854f6-0906-4a2f-8099-3bf0a681582a",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2025-04-09T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "f553570d-d43b-4e96-81d9-86fc73b0274d",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "amended",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2025-04-09T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "1adf08f8-2194-44bd-b44f-f0f245c62ede",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2024-04-05T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "6bea0e5c-f139-4688-867c-89908079cd46",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "392003006",
                "display": "Colposcopy (procedure)"
              }
            ],
            "text": "Colposcopy (procedure)"
          },
          "performedDateTime": "2024-04-05T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cbf66408-1534-442f-9f93-f8a669197df2",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2024-03-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "ccf78d28-3ecc-4867-9473-e3244b8a56e2",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2024-03-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "7da9123c-7e7d-4edc-b48d-fbd2ff7a2478",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "performedDateTime": "2023-04-01T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "b0995a5c-d8f5-40d8-81c3-ee284875e601",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2023-03-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "Procedure",
          "id": "2d832428-a944-4ccc-b8e0-2a15b1cce9f3",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "completed",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "392003006",
                "display": "Colposcopy (procedure)"
              }
            ],
            "text": "Colposcopy (procedure)"
          },
          "performedDateTime": "2023-03-22T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "56115887-35d2-4c12-947c-83ed1a2c395d",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2023-01-17T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "31542eaf-17f7-41a2-9de3-765e6e36a5a5",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "47527-7",
                "display": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
              }
            ],
            "text": "Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep"
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
          "effectiveDateTime": "2023-01-17T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "97532862-2c7f-4e97-aa71-654b37c3e6b6",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2022-01-23T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "5e859a38-7ea7-4dd8-9207-0ecddfbadc7d",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2022-01-23T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "dea3f539-414a-48c4-bf58-937f60cd1ef8",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2019-01-12T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cd28a2ce-5b54-4719-83ef-d302b4113dfe",
          "subject": {
            "reference": "Patient/Shana11Meyers45"
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
          "effectiveDateTime": "2019-01-12T00:00:00.000Z"
        }
      }
    ]
  },
  "Tanya44Marshall12": {
    "resourceType": "Bundle",
    "id": "Tanya44 Marshall12",
    "type": "collection",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "Tanya44Marshall12",
          "name": [
            {
              "given": [
                "Tanya44"
              ],
              "family": "Marshall12"
            }
          ],
          "gender": "female",
          "birthDate": "1959-03-15",
          "extension": [
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                {
                  "url": "text",
                  "valueString": "White or Caucasian"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                {
                  "url": "text",
                  "valueString": "Not Hispanic or Latino"
                }
              ]
            }
          ],
          "communication": [
            {
              "language": {
                "coding": [
                  {
                    "system": "urn:ietf:bcp:47",
                    "code": "en",
                    "display": "English"
                  }
                ],
                "text": "English"
              },
              "preferred": true
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                  }
                ],
                "text": "Medical Record Number"
              },
              "system": "http://hospital.smarthealthit.org",
              "value": "MR-8269-6277"
            }
          ]
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "401f2609-b327-4aa8-86c8-69e32e3bfb47",
          "subject": {
            "reference": "Patient/Tanya44Marshall12"
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
          "effectiveDateTime": "2025-04-18T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "cc5f395a-7af8-4651-8ff1-8d31dba263e6",
          "subject": {
            "reference": "Patient/Tanya44Marshall12"
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
          "effectiveDateTime": "2022-04-16T00:00:00.000Z"
        }
      },
      {
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "1130f59c-2796-46ce-be28-81b84cf700fc",
          "subject": {
            "reference": "Patient/Tanya44Marshall12"
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
          "effectiveDateTime": "2012-07-05T00:00:00.000Z"
        }
      }
    ]
  }

}