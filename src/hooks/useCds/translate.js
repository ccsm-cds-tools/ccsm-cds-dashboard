import { stridesData } from "./strides";

const testCodeResultMapping = [
  {
    testCode: ['47527-7'],
    testName: 'Cytology',
    map: [
      {
        text: "Negative for intraepithelial lesion or malignancy",
        code: "373887005"
      },
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
      },
      {
        text: "Other, see comment",
        code: "126481000119106"
      }
    ]
  },
  {
    testCode: ['71431-1', '77399-4', '77400-0'],
    testName: 'HPV',
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
  },
  {
    testName: 'Histology',
    map: [
      {
        "text": "Insufficient",
        "code": "112631006"
      },
      {
        "text": "Negative",
        "code": "309162003"
      },
      {
        "text": "CIN1",
        "code": "285836003"
      },
      {
        "text": "CIN2",
        "code": "285838002"
      },
      {
        "text": "CIN2-3",
        "code": "20365006"
      },
      {
        "text": "CIN3",
        "code": "20365006"
      },
      {
        "text": "Cervical squamous in situ",
        "code": "92564006"
      },
      {
        "text": "Cervical adenocarcinoma in situ",
        "code": "254890008"
      },
      {
        "text": "Cervical Squamous Cell Carcinoma",
        "code": "254886006"
      },
      {
        "text": "Cervical Adenocarcinoma",
        "code": "254887002"
      },
      {
        "text": "Cervical, Malignant Other",
        "code": "363354003"
      }
    ]
  }
]

const loincMapping = [
  {
    oldCode: '61372-9',
    newCode: '77399-4'
  },
  {
    oldCode: '61373-7',
    newCode: '77400-0'
  },
  {
    oldCode: '50595-8',
    newCode: '47527-7'
  }
];

const pathologyMapping = [
  {
    text: 'Insufficient'

  }
]


const SCT_URL = 'http://snomed.info/sct'
const LOINC_URL = 'http://loinc.org'


/**
 * Translate terminology codings used in Observation
 * To be considered in future use: Translate terminology codings used DiagnosticReport
 * @param {Object[]} patientDatea - Array of FHIR resources
 */
export function translateResponse(patientData) {
  const patientDataMap = patientData.reduce((acc, pd) => {
    if (!acc[pd.resourceType]) {
      acc[pd.resourceType] = [];
    }
    acc[pd.resourceType].push(pd);
    return acc;
  }, {});

  if (patientDataMap.Observation != null && patientDataMap.Observation.length > 0) {
    patientDataMap.Observation.forEach(pd => mapResult(pd, loincMapping, testCodeResultMapping));

    mapStrideResult(patientDataMap, stridesData);
  }
}

/**
 *
 * @param {*} result - Observation resource to be mapping
 * @param {*} loincMapping - Loinc old_code => new_code mapping
 */
function mapLoincCode(result, loincMapping) {
  const existingCodes = new Set(result.code.coding.map(coding => coding.code));

  for (const { oldCode, newCode } of loincMapping) {
    if (existingCodes.has(oldCode) && !existingCodes.has(newCode)) {
      result.code.coding.push({
        system: LOINC_URL,
        code: newCode
      });
      break;
    }
  }
}

function mapResult(result, loincMapping, testCodeResultMapping) {
  mapLoincCode(result, loincMapping);

  const customCodes = testCodeResultMapping.find(ts =>
    result.code.coding.some(coding => ts.testCode?.includes(coding.code))
  );

  if (customCodes && !result.valueCodeableConcept && result.valueString) {
    const mappedCode = customCodes.map.find(cc => cc.text.localeCompare(result.valueString, undefined, { sensitivity: 'base' }) === 0);

    if (mappedCode) {
      result.valueCodeableConcept = {
        coding: [{
          system: SCT_URL,
          code: mappedCode.code
        }],
        text: result.valueString
      };

      delete result.valueString;
    }
  }
}

function mapStrideResult(patientData, stridesData) {
  if (!patientData.length) {
    return;
  }

  const diagnosticReports = [];
  const observations = [];
  let mrn = null;

  for (const data of patientData) {
    if (data.resourceType === 'Patient') {
      mrn = data.identifier.find(id => id.type?.text === 'MRN')?.value;
    } else if (data.resourceType === 'DiagnosticReport') {
      diagnosticReports.push(data);
    } else if (data.resourceType === 'Observation') {
      observations.push(data);
    }
  }

  if (!mrn || diagnosticReports.length === 0 || observations.length === 0) {
    return;
  }

  for (const dr of diagnosticReports) {
    const orderId = dr.identifier.find(id => id.system === 'https://open.epic.com/FHIR/284/order-accession-number/Beaker')?.value;

    if (!orderId) {
      continue;
    }

    const result = observations.find(ob => ob.valueString?.includes(`Case: ${orderId}`));

    if (result) {
      const mappedCode = searchStridesCode(orderId, stridesData);

      if (mappedCode) {
        result.valueCodeableConcept = {
          coding: [{
            system: SCT_URL,
            code: mappedCode.code
          }],
          text: result.valueString
        };

        delete result.valueString;
      }
    }
  }
}


function searchStridesCode(orderId, stridesData) {
  const strideCode = 'CIN3';
  const customCodes = testCodeResultMapping.find(ts => ts.testName === 'Histology')
  const mappedCode = customCodes.map.find(cc => cc.text.localeCompare(strideCode, undefined, { sensitivity: 'base' }) === 0);
  return mappedCode;
}




