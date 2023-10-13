const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const translate = require('../src/hooks/useCds/translate.js')


describe('translate', () => {
  let patientData;
  const patientDataContent = fs.readFileSync('./test/fixtures/translate/patientData.json', 'utf-8');

  beforeEach(() => {
    patientData = JSON.parse(patientDataContent).patientData;
  });

  describe('translateResponse', ()=>{
    it('should add SNOMED CT coding to Observation', () => {
      translate.translateResponse(patientData);
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
    const stridesData = JSON.parse(stridesDataContent);

    it('should include strides data', () => {
      translate.translateResponse(patientData, stridesData);
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport' && resource.conclusionCodes?.length > 0)).to.be.true;
      expect(patientData.some(resource => resource.resourceType === 'Procedure')).to.be.true;
    });
  });
});


