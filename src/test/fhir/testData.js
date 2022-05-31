export const testData = {
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