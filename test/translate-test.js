/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import fs from 'fs';
import { translateResponse } from '../src/hooks/useCds/translate';

describe('translate', () => {
  let patientData;
  const patientDataContent = fs.readFileSync('./test/fixtures/translate/patientData.json', 'utf-8');

  beforeEach(() => {
    patientData = JSON.parse(patientDataContent).patientData;
  });

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

    it('should add SNOMED CT coding to Observation if valueString has more than one line', () => {
      const obs = patientData.find(pd => pd.resourceType === 'Observation' && pd.valueString);
      const expectedString = obs.valueString + "\r\nadditional line";
      obs.valueString = expectedString

      translateResponse(patientData);

      expect(patientData.some(resource =>
        resource.resourceType === 'Observation' &&
        !resource.valueString &&
        resource.valueCodeableConcept?.text === expectedString &&
        resource.valueCodeableConcept?.coding?.some(coding => coding.system === 'http://snomed.info/sct' && coding.code === '441087007')
      )).to.be.true
    });
  });

  describe('maps strides data', () => {
    const stridesDataContent = fs.readFileSync('./test/fixtures/translate/strides.json', 'utf-8');
    const stridesData = JSON.parse(stridesDataContent);

    it('should include strides data', () => {
      translateResponse(patientData, stridesData);
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport' &&
                              resource.code.coding.some(coding => coding.code === '65753-6' && coding.system === 'http://loinc.org') &&
                              resource.conclusionCode?.some(cc => cc.coding.some(coding => coding.system == 'urn:uuid:90915bcf-353c-49e1-b65e-0464798baa77')))
            ).to.be.true;
      expect(patientData.some(resource => resource.resourceType === 'Procedure' &&
                              resource.code.coding.some(coding => coding.system == 'urn:uuid:273494e4-40f0-4a53-b1a3-2d30c32d76d1'))
            ).to.be.true;
    });

    it('should return when Patient does not have MRN', () => {
      let patientWithoutMRN = patientData.find(pd => pd.resourceType === 'Patient');
      patientWithoutMRN.identifier = patientWithoutMRN.identifier.filter(id => id.type.text !== 'MRN');
      translateResponse(patientData, stridesData);
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport' &&
                              resource.code.coding.some(coding => coding.code === '65753-6' && coding.system === 'http://loinc.org'))
            ).to.be.false;
    });

    it('should return when patientData does not have DiagnosticReport', () => {
      patientData = patientData.filter(pd => pd.resourceType !== 'DiagnosticReport')
      translateResponse(patientData, stridesData);
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport')).to.be.false;
    });
  });

  describe('translate EpisodeOfCare', () => {
    it('should translate epic code to snomed code', () => {
      translateResponse(patientData);

      const episodeOfCare = patientData.filter(pd => pd.resourceType === 'EpisodeOfCare');
      expect(episodeOfCare).to.not.be.empty;
      expect(episodeOfCare.some(p => p.type.some(type => type.coding.some(coding => coding.code === '424525001' && coding.system === 'http://snomed.info/sct')))).to.be.true;
      expect(episodeOfCare.some(p => p.type.some(type => type.text === 'PREGNANCY'))).to.be.true;
    });

    it('should skip if resource does not have EpisodeOfCare', () => {
      let patientDataWithoutEpisodeOfCare = patientData.filter(pd => pd.resourceType !== 'EpisodeOfCare');
      translateResponse(patientDataWithoutEpisodeOfCare);

      const episodeOfCare = patientDataWithoutEpisodeOfCare.filter(pd => pd.resourceType === 'EpisodeOfCare');
      expect(episodeOfCare).to.be.empty;
    });
  })
});
