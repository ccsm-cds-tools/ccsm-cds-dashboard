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
      code: '116140006',
      display: 'Total hysterectomy (procedure)'
    },
    {
      text: '2',
      code: '120038005',
      display: 'Cervix Excision'
    },
    {
      text: '3',
      code: '176786003',
      display: 'Colposcopy of cervix (procedure)'
    },
    {
      text: '4',
      code: '52889002',
      display: 'Endocervical Curettage'
    },
    {
      text: '5',
      code: '176786003',
      display: 'Colposcopy of cervix (procedure)'
    },
    {
      text: '6',
      code: '176786003',
      display: 'Colposcopy of cervix (procedure)'
    }
  ],
  IMSDiscreteGoldDiagnosis: [
    {
      text: "-1",
      code: "112631006",
      display: 'Specimen insufficient for diagnosis'
    },
    {
      text: "0",
      code: "309162003",
      display: 'Biopsy result normal (finding)'
    },
    {
      text: "1",
      code: "285836003",
      display: 'Cervical intraepithelial neoplasia grade 1 (disorder)'
    },
    {
      text: "2",
      code: "285838002",
      display: 'Cervical intraepithelial neoplasia grade 2 (disorder)'
    },
    {
      text: "3",
      code: "20365006",
      display: 'Squamous intraepithelial neoplasia, grade III (morphologic abnormality)'
    },
    {
      text: "4",
      code: "254890008",
      display: 'Adenocarcinoma in situ of cervix (disorder)'
    },
    {
      text: "5",
      code: "363354003",
      display: 'Malignant tumor of cervix (disorder)'
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

const SCT_URL = 'http://snomed.info/sct';
const LOINC_URL = 'http://loinc.org';
const LOCAL_URL = 'http://OUR-PLACEHOLDER-URL.com';
const STRIDES_DIAG_URI = 'urn:uuid:90915bcf-353c-49e1-b65e-0464798baa77';
const STRIDES_PROC_URI = 'urn:uuid:273494e4-40f0-4a53-b1a3-2d30c32d76d1';


// EPIC Code System for EpisodeOfCare Type
const episodeOfCareTypeCodeSystem = [
  'urn:oid:1.2.840.114350.1.13.284.2.7.2.726668', //PRD
  'urn:oid:1.2.840.114350.1.13.284.2.7.4.726668.130', // PRD
  'urn:oid:1.2.840.114350.1.13.284.3.7.2.726668', // nonPRD
  'urn:oid:1.2.840.114350.1.13.284.3.7.4.726668.130' // nonPRD
];

const snomedPregnancyCare = {
  'system': SCT_URL,
  'code': '424525001',
  'display': 'Antenatal care (regime/therapy)'
};

const loincBiopsyReport = {
  system: LOINC_URL,
  code: '65753-6',
  display: 'Cervix Pathology biopsy report'
};

const snomedImmunosuppressed = {
  label: 'Immunosuppressed',
  code: {
    coding: [
      {
       system: SCT_URL,
        code: '370388006',
        display: 'Patient immunocompromised (finding)'
      }
    ]
  }
};

const pregnantObservation = {
  label: 'Pregnant',
  code: {
    coding:[
      {
        system: LOINC_URL,
        code: '82810-3',
        display: 'Pregnancy status'
      }
    ]
  },
  valueCodeableConcept: {
    coding: [
      {
        system: SCT_URL,
        code: '77386006',
        display: 'Patient currently pregnant (finding)'
      }
    ]
  }
};

const pregnantConcernedObservation = {
  label: 'PregnantConcerned',
  code: {
    coding: [
      {
        system: LOCAL_URL,
        code: 'FPCQ',
        display: 'Does the patient have future pregnancy concerns related to treatment options?'
      }
    ]
  },
  valueCodeableConcept: {
    coding: [
      {
        system: SCT_URL,
        code: '373066001',
        display: 'Yes'
      }
    ]
  }
}

const symptomaticObservation = {
  label: 'Symptomatic',
  code: {
    coding: [
      {
        system: LOCAL_URL,
        code: 'AUVBQ',
        display: 'Is the patient experiencing abnormal uterine or vaginal bleeding today?'
      }
    ]
  },
  valueCodeableConcept: {
    coding: [
      {
        system: SCT_URL,
        code: '373066001',
        display: 'Yes'
      }
    ]
  }
}


/**
 * Translate terminology codings used in Observation
 * To be considered in future use: Translate terminology codings used DiagnosticReport
 * @param {Object[]} patientDatea - Array of FHIR resources
 */
export function translateResponse(patientData, stridesData) {
  if (patientData == null || patientData.length == 0) {
    return;
  }

  const patientDataMap = patientDataToHash(patientData);

  patientDataMap.Observation?.forEach(pd => mapResult(pd, loincMapping, testCodeResultMapping));
  patientDataMap.EpisodeOfCare?.forEach(episodeOfCare => mapEpisodeOfCare(episodeOfCare));

  if (stridesData && Object.keys(stridesData).length > 0) {
    mapStrideResult(patientData, patientDataMap, stridesData);
  }

  console.log("translate completed.")
}

export function translateToggleChange(patientData, toggleStatus) {
  if (patientData == null || patientData.length == 0) {
    return;
  }

  const patient = patientData.find(pd => pd.resourceType == 'Patient');
  handleToggles(patient, patientData, toggleStatus.isImmunosuppressed, immunosuppressedObservation);
  handleToggles(patient, patientData, toggleStatus.isPregnant, pregnantObservation);
  handleToggles(patient, patientData, toggleStatus.isPregnantConcerned, pregnantConcernedObservation);
  handleToggles(patient, patientData, toggleStatus.isSymptomatic, symptomaticObservation);
}

function handleToggles(patient, patientData, isChecked, obs) {
  const newObsId = `new-observation-for-${obs.label.toLowerCase()}`;
  if (isChecked) {
    const found = patientData.find(pd => pd.id === newObsId);
    if (!found) {
      const newObs = {
        resourceType: 'Observation',
        id: newObsId,
        subject: {
          reference: `Patient/${patient.id}`
        },
        code: obs.code,
        effectiveDateTime: (new Date()).toISOString()
      }

      if (obs.valueCodeableConcept) {
        newObs.valueCodeableConcept = obs.valueCodeableConcept
      }

      patientData.push(newObs)
      console.log(`Add new observation for ${obs.label}.`)
    }
  } else {
    const index = patientData.findIndex(pd => pd.id === newObsId);

    if (index >= 0) {
      patientData.splice(index, 1);
      console.log(`Remove new observation for ${obs.label}.`)
    }
  }
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
  if (!result.code.coding?.length) { return; }
  mapLoincCode(result, loincMapping);

  const customCodes = testCodeResultMapping.find(ts =>
    result.code.coding.some(coding => ts.testCode?.includes(coding.code))
  );

  if (customCodes && !result.valueCodeableConcept && result.valueString) {
    const firstLine = result.valueString.split("\r\n")[0];
    const mappedCode = customCodes.map.find(cc => cc.text.localeCompare(firstLine, undefined, { sensitivity: 'base' }) === 0);

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

//
// Strides Data
//
function mapStrideResult(patientData, patientDataMap, stridesData) {
  if (!patientDataMap || !(patientDataMap.Patient?.length) || !(patientDataMap.DiagnosticReport?.length)) {
    return;
  }

  const mrn = patientDataMap.Patient[0].identifier?.find(id => id.type?.text === ('MRN') || id.type?.text === ('Medical Record Number'))?.value;

  if (!mrn) {
    return;
  }

  const stridesPatientData = stridesData[mrn];

  if (!stridesPatientData) {
    return;
  }

  stridesPatientData.forEach(row => {
    const orderId = row['ORDER_ID'];
    const diagnosticReport = patientDataMap.DiagnosticReport.find(
      dr => dr.identifier.some(identifier => identifier.system === 'urn:oid:1.2.840.114350.1.13.284.3.7.2.798268' && identifier.value == orderId));

    if (!diagnosticReport) return;

    console.log(`DiagnosticReport/${diagnosticReport.id} is mapped to STRIDES order ${orderId}`)

    const mappedDiagnosisCC = mapStridesCodeToCC(row, 'IMSDiscreteGoldDiagnosis', STRIDES_DIAG_URI);

    if (mappedDiagnosisCC) {
      diagnosticReport.code.coding.push(loincBiopsyReport);

      diagnosticReport.conclusionCodes ||= [];

      diagnosticReport.conclusionCodes.push(mappedDiagnosisCC);
    }

    const mappedProcedureCC = mapStridesCodeToCC(row, 'IMSDiscreteprocedure', STRIDES_PROC_URI);

    if (mappedProcedureCC) {
      const newProcedure =
      {
        resourceType: 'Procedure',
        id: diagnosticReport.id,
        subject: diagnosticReport.subject,
        status: 'completed',
        code: mappedProcedureCC,
        performedDateTime: diagnosticReport.effectiveDateTime
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

function mapStridesCodeToCC(stridesOrder, column, localSystemUri) {
  const stridesCode = stridesOrder[column];
  const mappedCode = stridesCodeMapping[column]?.find(map => map.text === stridesCode);

  if (mappedCode) {
    console.log(`STRIDES code ${stridesCode} from ${column} is mapped to Snomed CT code ${mappedCode.code} with display text ${mappedCode.display}`)
    return {
      coding: [
        {
          system: SCT_URL,
          code: mappedCode.code,
          display: mappedCode.display
        },
        {
          system: localSystemUri,
          code: stridesCode
        }
      ],
      text: mappedCode.display
    }
  }
}

/**
 * If EpisodeOfCare.type has specific Epic Code,
 * Add SNOMED CT Pregnancy coding to EpisodeOfCare.type
 * @param {EpisodeOfCare} episodeOfCare
 */
function mapEpisodeOfCare(episodeOfCare) {
  let pregnancyType, epicCoding;

  pregnancyType = episodeOfCare.type?.find(type =>
    type.coding?.some(coding => {
      const isEpicCoding = episodeOfCareTypeCodeSystem.includes(coding.system) && coding.code === '2';

      if (isEpicCoding) {
        epicCoding = coding;
      }

      return isEpicCoding;
    })
  );

  if (pregnancyType && epicCoding) {
    pregnancyType.coding.push(snomedPregnancyCare);

    if (!pregnancyType.text) {
      pregnancyType.text = epicCoding.display;
    }
  }
}
