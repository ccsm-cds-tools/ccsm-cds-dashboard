import { Modal } from 'react-bootstrap';
import { Questionnaire } from './Questionnaire.js';

function AddDataDialog(fhirQuestionnaire, meta, resolver=()=>{}) {

  const { title, preamble } = meta;

  return function(props) {
    const { 
      show, 
      handleClose, 
      setPatientData=()=>{}
    } = props;

    return (
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{preamble}</p>
          <Questionnaire 
            fhirQuestionnaire={fhirQuestionnaire} 
            handleClose={handleClose} 
            setPatientData={setPatientData}
            resolver={resolver}
          />
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddDataDialog;