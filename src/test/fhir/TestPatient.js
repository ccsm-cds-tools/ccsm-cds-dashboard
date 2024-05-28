import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';
import './TestPatient.scss';

// Load the test data and configuration
import { testData } from './testData.js';
import { config } from './test.config.js';

export function TestPatient() {
  let params = useParams();
  const [patientData, setPatientData] = useState([]);

  const [toggleStatus, setToggleStatus] = useState({
    isImmunosuppressed: false,
    isPregnant: false,
    isPregnantConcerned: false,
    isSymptomatic: false,
    isToggleChanged: false
  });
  const {output: dashboardInput, isLoadingCdsData } = useCds(patientData, toggleStatus);
  const isLoading = isLoadingCdsData;
  // Extract the data for the requested test patient
  if (params.testName in testData) {
    if (patientData.length === 0) {
      // Assumes all test patient data is in a Bundle
      const newData = testData[params.testName].entry.map((c) => {
        if (!c.resource) return;
        return c.resource;
      })
      setPatientData(newData);
    }


    // Return the Dashboard with a testing disclaimer at the top
    return (
      <div className="content">
      <p className="alert alert-danger">The CDC/MITRE Cervical Cancer CDS Dashboard is under pilot evaluation and is <b>not for use in clinical practice.</b></p>
        <div className="dashboard-container">
          {isLoading && (
            <div className="overlay">
              <div className="spinner"></div>
            </div>
          )}
        <Dashboard 
          input={dashboardInput} 
          config={config} 
          setPatientData={setPatientData}
          onToggleStatusChange={setToggleStatus}
        />
      </div>
      </div>
    )
  } else {
    // TODO: Route back to TestPatientSelector
    return <Navigate to="/tests-fhir" replace={true} />
  }
  
}