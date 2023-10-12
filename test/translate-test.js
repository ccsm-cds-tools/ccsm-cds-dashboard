import { expect } from 'chai';
import { mapStrideResult, patientDataToHash, translateResponse } from '../src/hooks/useCds/translate.js';
import fs from 'fs';

describe('translate', () => {
  const patientDataContent = fs.readFileSync('./test/fixtures/translate/patientData.json', 'utf-8');
  const patientData = JSON.parse(patientDataContent).patientData;

  describe('translateResponse', ()=>{
    it('should add SNOMED CT coding to Observation', () => {
      translateResponse(patientData);
      expect(patientData.some(resource =>
        resource.resourceType === 'Observation' &&
        !resource.valueString &&
        resource.valueCodeableConcept?.text === 'Atypical squamous cells of undetermined significance' &&
        resource.valueCodeableConcept?.coding?.some(coding => coding.system === 'http://snomed.info/sct' && coding.code === '441087007')
      )).to.be.true
    });
  });

  describe('maps strides data', () => {
    const stridesDataContent = fs.readFileSync('./test/fixtures/translate/strides.json', 'utf-8');
    const patientDataMap = patientDataToHash(patientData)
    const stridesData = JSON.parse(stridesDataContent);

    it('should include strides data', () => {
      mapStrideResult(patientData, patientDataMap, stridesData);
      expect(patientDataMap.DiagnosticReport.some(dr => dr.conclusionCodes?.length > 0)).to.be.true;
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport' && resource.conclusionCodes?.length > 0)).to.be.true;
    });
  });
});


