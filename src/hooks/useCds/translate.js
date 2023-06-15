const testCodeResultMapping = [
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
        text: "Not Detected",
        code: "260415000"
      },
      {
        text: "Negative",
        code: "260415000"
      },
      {
        text: "Detected",
        code: "260373001"
      },
      {
        text: "Postive",
        code: "260373001"
      }
    ]
  }
]

const loincMapping = new Map([
  ['61372-9', '77399-4'],
  ['61373-7', '77400-0']
]);

const SCT_URL = 'http://snomed.info/sct'


/**
 * Translate terminologies in Observation and DiagnosticReport
 * @param {Object[]} patientDatea - Array of FHIR resources
 * @returns {Object[]} - patientData updated with the results from terminology mapping
 */
export function translateResponse(patientData) {
  patientData
    .filter(pd => pd.resourceType === 'Observation')
    .forEach(pd => mapResult(pd, loincMapping, testCodeResultMapping));
}

function mapResult(result, loincMapping, testCodeResultMapping) {
  result.code.coding.forEach(coding => {
    const mappedLoinc = loincMapping.get(coding.code);
    if (mappedLoinc) {
      coding.code = mappedLoinc;
    }
  });

  const customCodes = testCodeResultMapping.find(ts =>
    result.code.coding.some(coding => ts.test_code.includes(coding.code))
  );

  if (customCodes && !result.valueCodeableConcept && result.valueString) {
    const mappedCode = customCodes.map.find(cc => cc.text.localeCompare(result.valueString, undefined, { sensitivity: 'base' }) === 0);

    if (mappedCode) {
      result.valueCodeableConcept = {
        coding: {
          code: mappedCode.code,
          system: SCT_URL
        },
        text: result.valueString
      };

      delete result.valueString
    }
  }
}

