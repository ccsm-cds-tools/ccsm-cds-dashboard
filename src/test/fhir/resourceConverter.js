
export function resourceConverter(questionnaireResponse) {

  const hpvConclusion = questionnaireResponse.item.filter(itm => itm.linkId === 'hpv-results').map(itm => itm.answer).flat();
  const papConclusion = questionnaireResponse.item.filter(itm => itm.linkId === 'cytology-results').map(itm => itm.answer).flat();
  const histConclusion = questionnaireResponse.item.filter(itm => itm.linkId === 'histology-results').map(itm => itm.answer).flat();

  let codeConclusionPair = [];
  const testTypes = questionnaireResponse.item.filter(itm => itm.linkId === 'test-type').map(itm => itm.answer)[0];
  testTypes.forEach(tt => {
    const code = tt.valueCoding.code;
    if (tt.valueCoding.code === '21440-3') codeConclusionPair.push({code: tt.valueCoding, conclusion: hpvConclusion[0].valueCoding});
    if (tt.valueCoding.code === '10524-7') codeConclusionPair.push({code: tt.valueCoding, conclusion: papConclusion[0].valueCoding});
    if (tt.valueCoding.code === '65753-6') codeConclusionPair.push({code: tt.valueCoding, conclusion: histConclusion[0].valueCoding});
  });

  console.log(codeConclusionPair);

  let resources = [];
  let id = 100;
  codeConclusionPair.forEach(ccp => {
    id = id + 1;
    resources.push({
      resourceType: 'DiagnosticReport',
      id: id.toString(),
      status: "amended",
      subject: {
        reference: 'Patient/2d0c1024-dee6-416f-af57-9e7544745e83'
      },
      effectiveDateTime: questionnaireResponse.authored,
      code: {
        coding: [
          ccp.code
        ]
      },
      conclusionCode: [{
        coding: [ccp.conclusion]
      }]
    })
  });

  return resources;
}

