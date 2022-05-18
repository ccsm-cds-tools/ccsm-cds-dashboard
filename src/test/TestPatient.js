import { useParams } from "react-router-dom";
import Dashboard from "features/Dashboard";
import './TestPatient.scss';

// Load the test data and configuration
import { testData } from './testData.js';
import { config } from './test.config.js';
import TestPatientSelector from "./TestPatientSelector";

function TestPatient() {
  let params = useParams();
  
  // Extract the data for the requested test patient
  if (params.testName in testData) {
    const scenario = testData[params.testName].scenario;
    const description = testData[params.testName].scenario_desc;
    const inputData = reshapeTestData(testData[params.testName]);
    // Return the Dashboard with a testing disclaimer at the top
    return (
      <div className="content">
        <p className="scenario">
          <b>Scenario:</b> {scenario} <br/>
          <span>{description}</span>
        </p>
        <p className="text-danger-dark">NOTE: ALL CLINICAL ITEMS ARE NOTIONAL - FOR PURPOSES OF DEMONSTRATION ONLY</p>
        <Dashboard input={inputData} config={config} />
      </div>
    )
  } else {
    // TODO: Route back to TestPatientSelector
    return <div></div>
  }
  
}

function reshapeTestData(testData) {
  return {
    patientInfo: {
      name: testData.name,
      mrn: testData.mrn,
      pregnant: testData.pregnant,
      dob: testData.dob,
      sab: testData.sab,
      age: testData.age,
      gender: testData.gender,
      language: testData.language,
      race: testData.race
    },
    patientHistory: {
      conditions: testData.conditions,
      labresults: testData.labresults,
      medications: testData.medications,
      procedures: testData.procedures,
      vaccinations: testData.vaccinations
    },
    decisionAids: {
      recommendation: testData.patientrec,
      recommendationGroup: testData.patientgroup,
      recommendationDetails: testData.recdetails,
      disclaimer: testData.disclaimer,
      suggestedOrder: testData.order,
      riskTable: testData.risk,
      references: testData.references,
      logicPath: testData.logicpath,
      logicPathSummary: testData.logicpathsummary,
      logicCriteria: testData.logiccriteria,
      timeline: testData.timeline
    }
  }
}

export default TestPatient;