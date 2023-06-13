const testCodeMapping = [
  {
    test_code: ['47527-7'],
    test_name: 'Cytology',
    map: [
      {
        text: "Negative for intraepithelial lesion or malignancy, atrophic pattern",
        code: "373887005"
      },
      {
        text: "Atypical squamous cells of undetermined significance",
        code: "441087007"
      },
      {
        text: "Atypical squamous cells of undetermined significance, cannot exclude high grade",
        code: "441088002"
      },
      {
        text: "Low grade squamous intraepithelial lesion",
        code: "62051000119105"
      },
      {
        text: "High grade squamous intraepithelial lesion",
        code: "62061000119107"
      },
      {
        text: "High grade squamous intraepithelial lesion, moderate dysplasia",
        code: "62061000119107"
      },
      {
        text: "High grade squamous intraepithelial lesion, severe dysplasia",
        code: "62061000119107"
      },
      {
        text: "High grade squamous intraepithelial lesion, Carcinoma in situ dysplasia",
        code: "62061000119107"
      },
      {
        text: "invasive squamous cell carcinoma",
        code: "416033009"
      },
      {
        text: "Atypical glandular cells, NOS",
        code: "441219009"
      },
      {
        text: "Atypical endocervial cells, NOS",
        code: "448406002"
      },
      {
        text: "Atypical endometrial cells, NOS",
        code: "441219009"
      },
      {
        text: "Endocervical adenocarcinoma in situ",
        code: "254890008"
      },
      {
        text: "Adenocarcinoma, not otherwise specified",
        code: "254890008"
      },
      {
        text: "invasive endocervical adenocarcinoma",
        code: "254890008"
      },
      {
        text: "Endometrial adenocarcinoma",
        code: "123845008"
      },
      {
        text: "Other malignant neoplasm, see comment",
        code: "416033009"
      },
      {
        text: "High grade squamous intraepithelial lesion, cannot rule out invasion",
        code: "373879009"
      },
      {
        text: "Unable to interpret",
        code: "126481000119106"
      },
      {
        text: "Malignant cells present",
        code: "416033009"
      },
      {
        text: "Reparative/reactive changes",
        code: "373887005"
      }
    ]
  },
  {
    test_code: ['71431-1', '77399-4', '77400-0'],
    test_name: 'HPV',
    map: [
      {
        text: "Not detected, negative",
        code: "260415000"
      },
      {
        test: "Detected, postive",
        code: "260373001"
      }
    ]
  }
]

const SCT_URL = 'http://snomed.info/sct'


/**
 * Translate terminologies in Observation and DiagnosticReport
 * @param {Object[]} patientDatea - Array of FHIR resources
 * @returns {Object[]} - patientData updated with the results from terminology mapping
 */
export function translateResponse(patientData) {
  patientData
    .filter(pd => pd.resourceType === 'Observation')
    .forEach(pd => mapResult(pd, testCodeMapping));
}

function mapResult(result, testCodeMapping) {
  const customCodes = testCodeMapping.find(ts => result.code.coding.some(coding => ts.test_code.includes(coding.code)));

  if (customCodes && !result.valueCodeableConcept && result.valueString) {
    const targetCode = customCodes.find(cc => cc.text === result.valueString);

    if (targetCode) {
      result.valueCodeableConcept = {
        coding: {
          code: targetCode.code,
          system: SCT_URL
        },
        text: targetCode.text
      };
    }
  }
}
