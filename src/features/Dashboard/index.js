import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';
import { Row, Col } from 'react-bootstrap';

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
    setPatientData=()=>{},
    toggleStatus,
    onToggleStatusChange
  } = props;

  return (
    <div className="main">
      <Row>
        <Col xl={6}>
          <PatientInfo input={patientInfo} />
          <PatientHistory
            input={patientHistory}
            resolver={resolver}
            config={config}
            setPatientData={setPatientData}
            patientReference={patientReference}
          />
        </Col>
        <Col xl={6}>
          <DecisionAids
            input={decisionAids}
            toggleStatus={toggleStatus}
            onToggleStatusChange={onToggleStatusChange}
          />
        </Col>
    </Row>
  </div>
  )
}

export default Dashboard;