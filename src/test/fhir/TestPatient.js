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
  const dashboardInput = useCds(patientData);
  
  // Extract the data for the requested test patient
  if (params.testName in testData) {
    if (patientData.length === 0) {
      const newData = testData[params.testName].entry.reduce((acc,cv) => {
        return [...acc, cv.resource];
      },[])
      setPatientData(newData);
    }

    // Return the Dashboard with a testing disclaimer at the top
    return (
      <div className="content">
        <p className="text-danger-dark">NOTE: ALL CLINICAL ITEMS ARE NOTIONAL - FOR PURPOSES OF DEMONSTRATION ONLY</p>
        <Dashboard 
          input={dashboardInput} 
          config={config} 
          setPatientData={setPatientData}
        />
      </div>
    )
  } else {
    // TODO: Route back to TestPatientSelector
    return <Navigate to="/tests-basic" replace={true} />
  }
  
}