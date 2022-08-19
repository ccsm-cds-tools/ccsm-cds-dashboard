
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
      
    } else if (resourceType === 'Observation') {

      let observationTypeValueSet = resolver('ValueSet/PertinentObservationShortList')[0];
      let observationTypeKey = matchCode(observationTypeValueSet, resourceToEdit);

      let qualifierValuesValueSet = resolver('ValueSet/QualifierValuesShortList')[0];
      let observationValueKey = matchValueCodeableConcept(qualifierValuesValueSet, resourceToEdit);

      model.data = {
        'observation-to-amend': resourceToEdit.id,
        'observation-type': observationTypeKey[0],
        'observation-value': observationValueKey[0],
        'observation-date': resourceToEdit.effectiveDateTime.split('T')[0]
      };

    } else if (resourceType === 'Condition') {

      let conditionTypeValueSet = resolver('ValueSet/PertinentConditionShortList')[0];
      let conditionTypeKey = matchCode(conditionTypeValueSet, resourceToEdit);

      model.data = {
        'condition-to-amend': resourceToEdit.id,
        'condition-type': conditionTypeKey[0],
        'condition-date': resourceToEdit.onsetDateTime.split('T')[0]
      };

    } else if (resourceType === 'Procedure') {

      let procedureTypeValueSet = resolver('ValueSet/PertinentProcedureShortList')[0];
      let procedureTypeKey = matchCode(procedureTypeValueSet, resourceToEdit);

      model.data = {
        'procedure-to-amend': resourceToEdit.id,
        'procedure-type': procedureTypeKey[0],
        'procedure-date': resourceToEdit.performedDateTime.split('T')[0]
      };

    } else if (resourceType === 'Immunization') {

      let immunizationTypeValueSet = resolver('ValueSet/PertinentVaccinationShortList')[0];
      let immunizationTypeKey = matchCode(immunizationTypeValueSet, {...resourceToEdit, code: resourceToEdit?.vaccineCode});

      model.data = {
        'immunization-to-amend': resourceToEdit.id,
        'immunization-type': immunizationTypeKey[0],
        'immunization-date': resourceToEdit.occurrenceDateTime.split('T')[0]
      };

    }

    
  }

  return model;

}

function matchCode(vset,rsrc) {
  return vset.compose.include.reduce((acc,cv) => {
    if (acc.length > 0) {
      return acc;
    } else {
      return cv.concept.filter(cnpt => {
        return rsrc.code.coding.map(cdng => cdng.code).includes(cnpt.code);
      }).map(cnpt => cnpt.display);
    }
  }, []);
}

function matchConclusionCode(vset,rsrc) {
  return vset.compose.include[0].concept.filter(cnpt => {
    return rsrc.conclusionCode.map(cc => cc.coding.map(cdng => cdng.code)).flat().includes(cnpt.code);
  }).map(cnpt => cnpt.display);
}

function matchValueCodeableConcept(vset,rsrc) {
  return vset.compose.include[0].concept.filter(cnpt => {
    return rsrc.valueCodeableConcept.coding.map(cdng => cdng.code).includes(cnpt.code);
  }).map(cnpt => cnpt.display);
}