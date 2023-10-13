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
  }
]

/**
 * STRIDES IMS Discrete Procedure to SNOMED Mapping
 * 1 = 'Hysterectomy' =>  116140006	Total hysterectomy (procedure)
 * 2 = 'LEEP/Cone'  =>  120038005	Cervix Excision
 * 3 = 'Cervical Bx'  =>  176786003	Colposcopy of cervix (procedure)
 * 4 = 'ECC'  =>  52889002 Endocervical Curettage
 * 5 = 'Polypectomy'  =>  176786003	Colposcopy of cervix (procedure)
 * 6 = ‘Colposcopy’ =>  176786003	Colposcopy of cervix (procedure)
 *
 * STRIDES IMS Discrete Gold Diagnosis to SNOMED mapping
 * . = 'Unknown'  =>  None	None
 * .N = 'Non-cervical procedures with or without DX'   => None	None
 * -2 = 'Missing cervical Dx' =>  None	None
 * -1 = 'Insufficient for Dx' =>  112631006	Specimen insufficient for diagnosis
 * 0 = 'Normal' =>  309162003	Biopsy result normal (finding)
 * 1 = 'CIN1' =>  285836003	Cervical intraepithelial neoplasia grade 1 (disorder)
 * 2 = 'CIN2' =>  285838002	Cervical intraepithelial neoplasia grade 2 (disorder)
 * 3 = 'CIN3' =>  20365006	Squamous intraepithelial neoplasia, grade III (morphologic abnormality)
 * 4 = 'AIS' => 254890008	Adenocarcinoma in situ of cervix (disorder)
 * 5 = 'Cancer' =>  363354003	Malignant tumor of cervix (disorder)
 */
const stridesCodeMapping = {
  IMSDiscreteprocedure: [
    {
      text: '1',
      code: '116140006'
    },
    {
      text: '2',
      code: '120038005'
    },
    {
      text: '3',
      code: '176786003'
    },
    {
      text: '4',
      code: '52889002'
    },
    {
      text: '5',
      code: '176786003'
    },
    {
      text: '6',
      code: '176786003'
    }
  ],
  IMSDiscreteGoldDiagnosis: [
    {
      text: "-1",
      code: "112631006"
    },
    {
      text: "0",
      code: "309162003"
    },
    {
      text: "1",
      code: "285836003"
    },
    {
      text: "2",
      code: "285838002"
    },
    {
      text: "3",
      code: "20365006"
    },
    {
      text: "4",
      code: "254890008"
    },
    {
      text: "5",
      code: "363354003"
    }
  ]
};

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
function translateResponse(patientData, stridesData) {
  const patientDataMap = patientDataToHash(patientData);

  if (patientDataMap.Observation != null && patientDataMap.Observation.length > 0) {
    patientDataMap.Observation.forEach(pd => mapResult(pd, loincMapping, testCodeResultMapping));

    if (stridesData && Object.keys(stridesData).length > 0) {
      mapStrideResult(patientData, patientDataMap, stridesData);
    }
  }

  console.log("translate completed.")
}

function patientDataToHash(patientData) {
  return patientData.reduce((hash, pd) => {
    if (!hash[pd.resourceType]) {
      hash[pd.resourceType] = [];
    }
    hash[pd.resourceType].push(pd);
    return hash;
  }, {});
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

function mapStrideResult(patientData, patientDataMap, stridesData) {
  const mrn = patientDataMap.Patient[0].identifier.find(id => id.type?.text === 'MRN')?.value;

  if (!mrn || patientDataMap.DiagnosticReport.length === 0) {
    return;
  }

  const stridesPatientData = stridesData[mrn];

  stridesPatientData.forEach(row => {
    const orderId = row['ORDER_ID'];
    const diagnosticReport = patientDataMap.DiagnosticReport.find(
      dr => dr.identifier.some(identifier => identifier.system === 'urn:oid:1.2.840.114350.1.13.284.3.7.2.798268' && identifier.value == orderId));

    if (!diagnosticReport) return;

    const mappedDiagnosisCoding = mapStridesCode(row, 'IMSDiscreteGoldDiagnosis');

    if (mappedDiagnosisCoding) {
      diagnosticReport.conclusionCodes ||= [];

      diagnosticReport.conclusionCodes.push(
        {
          coding: [mappedDiagnosisCoding]
        }
      );
    }

    const mappedProcedureCoding = mapStridesCode(row, 'IMSDiscreteprocedure');

    if (mappedProcedureCoding) {
      const newProcedure =
      {
        'resourceType': 'Procedure',
        'id': diagnosticReport.id,
        'subject': diagnosticReport.subject,
        'status': 'completed',
        code: {
          'coding': [mappedProcedureCoding],
        },
        'performedDateTime': diagnosticReport.effectiveDateTime
      };

      if (newProcedure.id.length > 54) {
        newProcedure.id = newProcedure.id.substring(0, 54) + '-procedure';
      } else {
        newProcedure.id += '-procedure';
      }

      patientData.push(newProcedure);
    }
  });
}

function mapStridesCode(stridesOrder, column) {
  const stridesCode = stridesOrder[column];
  const mappedCode = stridesCodeMapping[column]?.find(map => map.text === stridesCode)?.code;

  if (mappedCode) {
    return {
      system: SCT_URL,
      code: mappedCode
    }
  }
}

module.exports.translateResponse = translateResponse;




