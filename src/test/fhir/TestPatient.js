import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from "features/Dashboard";
import { useCds } from './useCds.js';
import './TestPatient.scss';

// Load the test data and configuration
import { testData } from './testData.js';
import { config } from './test.config.js';

export function TestPatient() {
  let params = useParams();
  const [patientData, setPatientData] = useState([]);
  const input = useCds(patientData);
  
  // Extract the data for the requested test patient
  if (params.testName in testData) {
    if (Object.keys(patientData).length === 0) {
      const newData = testData[params.testName].entry.reduce((acc,cv) => {
        return [
          ...acc,
          cv.resource
        ];
      },[])
      setPatientData(newData);
    }

    // Return the Dashboard with a testing disclaimer at the top
    return (
      <div className="content">
        <p className="text-danger-dark">NOTE: ALL CLINICAL ITEMS ARE NOTIONAL - FOR PURPOSES OF DEMONSTRATION ONLY</p>
        <Dashboard input={input} config={config} />
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