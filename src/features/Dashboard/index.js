import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';

import './style.scss';

function Dashboard(props) {

  console.log(props);
  const {
    input: {
      patientInfo={},
      patientHistory={},
      decisionAids={},
      resolver=()=>{}
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
          />
        </div>
        <div className="col-xl-6">
          <DecisionAids input={decisionAids} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;