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
  const [convertedData, setConvertedData] = useState([]);

  const [toggleStatus, setToggleStatus] = useState({
    isImmunosuppressed: false,
    isPregnant: false,
    isPregnantConcerned: false,
    isSymptomatic: false,
    isToggleChanged: false
  });
  const {output: dashboardInput, isLoadingCdsData } = useCds(patientData, toggleStatus);
  
  // Extract the data for the requested test patient
  if (params.testName in testData) {
    if (patientData.length === 0) {
      const newData = testData[params.testName].entry.reduce((acc,cv) => {
        return [...acc, cv.resource];
      },[])
      setPatientData(newData);
      setConvertedData(newData);
    }

    // Return the Dashboard with a testing disclaimer at the top
    return (
      <div className="content">
        <p className="alert alert-danger">Cervical Cancer CDS is for pilot evaluation use ONLY.</p>
        <Dashboard 
          input={dashboardInput} 
          config={config} 
          setPatientData={setPatientData}
          onToggleStatusChange={setToggleStatus}
        />
      </div>
    )
  } else {
    // TODO: Route back to TestPatientSelector
    return <Navigate to="/tests-fhir" replace={true} />
  }
  
}