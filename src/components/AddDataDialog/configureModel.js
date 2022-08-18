
export function configureModel(model, resolver, resourceToEdit) {
  
  // Set SurveyJS settings
  model.showQuestionNumbers = 'off';
  model.completeText = 'Submit';
  model.clearInvisibleValues = 'onHidden';
  model.requiredText = '';

  if (resourceToEdit.length > 0) {
    resourceToEdit = resourceToEdit[0];
    const resourceType = resourceToEdit.resourceType;

    if (resourceType === 'DiagnosticReport') {

      let testTypeValueSet = resolver('ValueSet/ScreeningAndManagementTestType')[0];
      let testTypeKey = matchCode(testTypeValueSet, resourceToEdit);

      let hpvResultValueSet = resolver('ValueSet/HpvTestResult')[0];
      let hpvResultKey = matchConclusionCode(hpvResultValueSet, resourceToEdit);

      let cytologyResultValueSet = resolver('ValueSet/CervicalCytologyResult')[0];
      let cytologyResultKey = matchConclusionCode(cytologyResultValueSet, resourceToEdit);

      let histologyResultValueSet = resolver('ValueSet/CervicalHistologyResult')[0];
      let histologyResultKey = matchConclusionCode(histologyResultValueSet, resourceToEdit);

      model.data = {
        'diagnostic-report-to-amend': resourceToEdit.id,
        'test-type': testTypeKey,
        'hpv-results': hpvResultKey[0],
        'cytology-results': cytologyResultKey[0],
        'histology-results': histologyResultKey[0],
        'test-date': resourceToEdit.effectiveDateTime.split('T')[0]
      };
      
    }

    
  }

  return model;

}

function matchCode(vset,rsrc) {
  return vset.compose.include[0].concept.filter(cnpt => {
    return rsrc.code.coding.map(cdng => cdng.code).includes(cnpt.code);
  }).map(cnpt => cnpt.display);
}

function matchConclusionCode(vset,rsrc) {
  return vset.compose.include[0].concept.filter(cnpt => {
    return rsrc.conclusionCode.map(cc => cc.coding.map(cdng => cdng.code)).flat().includes(cnpt.code);
  }).map(cnpt => cnpt.display);
}