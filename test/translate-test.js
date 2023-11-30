/* eslint-disable no-unused-expressions */
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

  describe('translate EpisodeOfCare', () => {
    it('should translate epic code to snomed code', () => {
      translate.translateResponse(patientData);

      const episodeOfCare = patientData.filter(pd => pd.resourceType === 'EpisodeOfCare');
      expect(episodeOfCare).to.not.be.empty;
      expect(episodeOfCare.some(p => p.type.some(type => type.coding.some(coding => coding.code === '424525001' && coding.system === 'http://snomed.info/sct')))).to.be.true;
      expect(episodeOfCare.some(p => p.type.some(type => type.text === 'PREGNANCY'))).to.be.true;
    });

    it('should skip if resource does not have EpisodeOfCare', () => {
      let patientDataWithoutEpisodeOfCare = patientData.filter(pd => pd.resourceType !== 'EpisodeOfCare');
      translate.translateResponse(patientDataWithoutEpisodeOfCare);

      const episodeOfCare = patientDataWithoutEpisodeOfCare.filter(pd => pd.resourceType === 'EpisodeOfCare');
      expect(episodeOfCare).to.be.empty;
    });
  })
});