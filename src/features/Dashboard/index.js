import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';
import SpecialConsiderations from 'features/SpecialConsiderations';

import './style.scss';

function Dashboard(props) {

  const {
    input: {
      patientInfo={},
      patientHistory={},
      decisionAids={},
      resolver=()=>{},
      patientReference=''
    },
    config={},
    setPatientData=()=>{}
  } = props;

  return (
    <div className="main">
          <PatientInfo input={patientInfo} />
          <SpecialConsiderations />
          <PatientHistory 
            input={patientHistory} 
            resolver={resolver} 
            config={config} 
            setPatientData={setPatientData}
            patientReference={patientReference}
          />
          <DecisionAids 
            input={decisionAids}
            resolver={resolver}
          />
        </div>
  )
}

export default Dashboard;