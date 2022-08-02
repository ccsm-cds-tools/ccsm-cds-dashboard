import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';

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
      <div className="row">
        <div className="col-xl-6">
          <PatientInfo input={patientInfo} />
          <PatientHistory 
            input={patientHistory} 
            resolver={resolver} 
            config={config} 
            setPatientData={setPatientData}
            patientReference={patientReference}
          />
        </div>
        <div className="col-xl-6">
          <DecisionAids 
            input={decisionAids}
            resolver={resolver}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;