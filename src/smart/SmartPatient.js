import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';

import { config } from './smart.config.js';

export function SmartPatient() {

  const [patientData, setPatientData] = useState([]);
  const dashboardInput = useCds(patientData);

  useEffect(() => {
    async function smartOnFhir() {
      let newData = [];
      let client = await FHIR.oauth2.ready();
      let patient = await client.patient.read();
      newData.unshift(patient);
      setPatientData(newData);
    }
    smartOnFhir();
  },[]);

  // Return the Dashboard with a testing disclaimer at the top
  return (
    <div className="content">
      <Dashboard 
        input={dashboardInput} 
        config={config} 
        setPatientData={setPatientData}
      />
    </div>
  )
  
}