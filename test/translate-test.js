import { expect } from 'chai';
import { mapStrideResult } from '../src/hooks/useCds/translate.js';
import fs from 'fs';

describe('mapStrideResult', () => {
  let patientData;

  describe('maps strides data', () => {
    const patientDataContent = fs.readFileSync('./test/fixtures/translate/stridePatientDataMap.json', 'utf-8');
    const stridesDataContent = fs.readFileSync('./test/fixtures/translate/strides.json', 'utf-8');
    const patientDataMap = JSON.parse(patientDataContent);
    const stridesData = JSON.parse(stridesDataContent);

    it('should include strides data', function () {
      mapStrideResult(patientDataMap, stridesData);
      expect(patientDataMap.DiagnosticReport.some(dr => dr.conclusionCodes?.length > 0)).to.be.true;
    });
  });
});
