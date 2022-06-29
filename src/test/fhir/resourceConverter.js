
export function resourceConverter(questionnaireResponse) {
  let resource = {
    resourceType: 'DiagnosticReport',
    id: 42,
    status: "amended",
    subject: {
      reference: 'Patient/2d0c1024-dee6-416f-af57-9e7544745e83'
    },
    effectiveDateTime: questionnaireResponse.authored,
    code: {
      coding: [
        getCode(questionnaireResponse.item.filter(itm => itm.linkId === 'test-type')[0])
      ]
    },
    conclusionCode: [{
      coding: getConclusion(questionnaireResponse.item.filter(itm => itm.linkId === 'hpv-results' || itm.linkId === 'cytology-results'))
    }]
  };

  return resource;
}

function getCode(item) {
  if (item.answer[0].valueString === 'HPV') return { system: 'http://loinc.org', code: '21440-3', display: 'Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe' }
  else if (item.answer[0].valueString === 'Cervical Cytology (Pap)') return { system: 'http://loinc.org', code: '10524-7', display: 'Microscopic observation [Identifier] in Cervix by Cyto stain' }
  else if (item.answer[0].valueString === 'HPV and Cytology Cotest') return { system: 'http://loinc.org', code: '47527-7', display: 'Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep' }
  else return {}
}

function getConclusion(item) {
  let conclusions = [];
  item.forEach(itm => {
    if (itm.answer[0].valueString === 'Negative') conclusions.push({ system: 'http://snomed.info/sct', code: '260385009', display: 'Negative (qualifier value)' })
    else if (itm.answer[0].valueString === 'Positive (Not Type 16/18)') conclusions.push({ system: 'http://snomed.info/sct', code: '10828004', display: 'Positive (qualifier value)' })
    else if (itm.answer[0].valueString === 'Positive (Type 16)') conclusions.push({ system: 'http://snomed.info/sct', code: '708298003', display: 'Deoxyribonucleic acid of Human papillomavirus 16 (substance)' })
    else if (itm.answer[0].valueString === 'Positive (Type 18)') conclusions.push({ system: 'http://snomed.info/sct', code: '708299006', display: 'Deoxyribonucleic acid of Human papillomavirus 18 (substance)' })
    else if (itm.answer[0].valueString === 'NILM') conclusions.push({ system: 'http://snomed.info/sct', code: '373887005', display: 'Negative for intraepithelial lesion or malignancy (finding)' })
    else if (itm.answer[0].valueString === 'LSIL') conclusions.push({ system: 'http://snomed.info/sct', code: '62051000119105', display: 'Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)' })
    else if (itm.answer[0].valueString === 'ASC-US') conclusions.push({ system: 'http://snomed.info/sct', code: '441087007', display: 'Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)' })
    else if (itm.answer[0].valueString === 'ASC-H') conclusions.push({ system: 'http://snomed.info/sct', code: '441088002', display: 'Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)' })
    else if (itm.answer[0].valueString === 'AGC') conclusions.push({ system: 'http://snomed.info/sct', code: '441219009', display: 'Atypical glandular cells on cervical Papanicolaou smear (finding)' })
    else if (itm.answer[0].valueString === 'HSIL') conclusions.push({ system: 'http://snomed.info/sct', code: '416033009', display: 'Cervicovaginal cytology: High grade squamous intraepithelial lesion or carcinoma (finding)' })
  });
  return conclusions;
}