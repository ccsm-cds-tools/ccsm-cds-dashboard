import PatientInfo from 'features/PatientInfo';
import PatientHistory from 'features/PatientHistory';
import DecisionAids from 'features/DecisionAids';
import { useState } from 'react';

import './style.scss';

function Dashboard(props) {
  const {
    input: {
      patientInfo,
      patientHistory,
      decisionAids
    },
    config 
  } = props;

  const [currentHistory, setCurrentHistory] = useState(patientHistory)

  const addHistory = function (questionnaireResponse) {
    // TODO: Convert QuuestionnaireResponse to a valid patient history entry
    let newPatientHistory = {
      ...currentHistory,
      questionnaireResponses: [
        ...currentHistory.questionnaireResponses,
        questionnaireResponse
      ]
    }
    setCurrentHistory(newPatientHistory)
    console.log(newPatientHistory);
  }

  return (
    <div className="main">
      <div className="row">
        <div className="col-xl-6">
          <PatientInfo input={patientInfo} />
          <PatientHistory input={patientHistory} config={config} addHistory={addHistory}/>
        </div>
        <div className="col-xl-6">
          <DecisionAids input={decisionAids} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;