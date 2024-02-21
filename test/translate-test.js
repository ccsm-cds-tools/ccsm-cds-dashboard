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
  });

  describe('maps strides data', () => {
    const stridesDataContent = fs.readFileSync('./test/fixtures/translate/strides.json', 'utf-8');
    const stridesData = JSON.parse(stridesDataContent);

    it('should include strides data', () => {
      translateResponse(patientData, stridesData);
      expect(patientData.some(resource => resource.resourceType === 'DiagnosticReport' &&
              resource.code.coding.some(coding => coding.code === '65753-6' && coding.system === 'http://loinc.org') &&
              resource.conclusionCodes?.length > 0)
            ).to.be.true;
      expect(patientData.some(resource => resource.resourceType === 'Procedure')).to.be.true;
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
