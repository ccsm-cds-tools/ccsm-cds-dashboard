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
          "birthDate": "1979-07-10",
          "language": "fr",
          "identifier": [
            {
              "system": "http://my.medical.record.number.org",
              "value": "AC-1947-4883"
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
          "identifier": [
            {
              "system": "http://my.medical.record.number.org",
              "value": "EM-7601-6251"
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
          "identifier": [
            {
              "system": "http://my.medical.record.number.org",
              "value": "DW-5934-4529"
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
          "effectiveDateTime": "2021-05-01T00:00:00.000Z"
        }
      }
    ]
  }
}