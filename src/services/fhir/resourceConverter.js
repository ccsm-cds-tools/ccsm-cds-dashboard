
export function resourceConverter(questionnaireResponse) {

  console.log('qr = ', questionnaireResponse);

  const hpvConclusion = questionnaireResponse.item
    .filter(itm => itm.linkId === 'hpv-results')
    .flatMap(itm => itm.answer);

  const papConclusion = questionnaireResponse.item
    .filter(itm => itm.linkId === 'cytology-results')
    .flatMap(itm => itm.answer);
  
  const histConclusion = questionnaireResponse.item
    .filter(itm => itm.linkId === 'histology-results')
    .flatMap(itm => itm.answer);

  const testDate = questionnaireResponse.item
    .filter(itm => itm.linkId === 'test-date')
    .flatMap(itm => itm.answer)
    [0].valueDate;

  let codeConclusionPair = [];
  const testTypes = questionnaireResponse.item.filter(itm => itm.linkId === 'test-type').map(itm => itm.answer)[0];
  testTypes.forEach(tt => {
    const coding = tt.valueCoding;
    if (tt.valueCoding.code === '21440-3') codeConclusionPair.push({code: coding, conclusion: hpvConclusion[0].valueCoding});
    if (tt.valueCoding.code === '10524-7') codeConclusionPair.push({code: coding, conclusion: papConclusion[0].valueCoding});
    if (tt.valueCoding.code === '65753-6') codeConclusionPair.push({code: coding, conclusion: histConclusion[0].valueCoding});
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
      effectiveDateTime: testDate,
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

