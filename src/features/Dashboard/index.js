import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';
import { Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './style.scss';
import "react-datepicker/dist/react-datepicker.css";

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
    onToggleStatusChange,
    selectedDate,
    setSelectedDate
  } = props;

  return (
    <div className="main">
      <Row>
        <Col xl={6}>
          <PatientInfo input={patientInfo} />
          <div>Rewind to date:
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
    </div>
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