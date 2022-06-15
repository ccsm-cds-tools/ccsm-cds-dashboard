import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Dashboard from "features/Dashboard";
import './TestPatient.scss';

// Load the test data and configuration
import { testData } from './testData.js';
import { config } from './test.config.js';

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
    return <Navigate to="/tests-basic" replace={true} />
  }
  
}

function reshapeTestData(testData) {
  return {
    patientInfo: {
      name: testData.name,
      id: testData.id,
      isPregnant: testData.isPregnant,
      dateOfBirth: testData.dateOfBirth,
      sexAtBirth: testData.sexAtBirth,
      age: testData.age,
      gender: testData.gender,
      primaryLanguage: testData.primaryLanguage,
      race: testData.race
    },
    patientHistory: {
      conditions: testData.conditions,
      diagnosticReports: testData.diagnosticReports,
      medications: testData.medications,
      procedures: testData.procedures,
      vaccinations: testData.vaccinations,
      questionnaireResponses : []
    },
    decisionAids: {
      recommendation: testData.patientrec,
      recommendationGroup: testData.patientgroup,
      recommendationDetails: testData.recdetails,
      errors: testData.errors,
      disclaimer: testData.disclaimer,
      suggestedOrder: testData.order,
      riskTable: testData.risk,
      references: testData.references,
      logicPath: testData.logicpath,
      logicSummary: testData.logicsummary,
      logicCriteria: testData.logiccriteria,
      timeline: testData.timeline
    }
  }
}

export default TestPatient;