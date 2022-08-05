import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ViewDataDialog(props) {

  const { 
    resolver, 
    dataToView,
    setDataToView,
    postLink='',
    allowEdit=true,
    setDataToEdit=()=>{}
  } = props;

  let [jsonString, setJsonString] = useState('');

  useEffect(() => {
    setJsonString(JSON.stringify(resolver(dataToView.data), null, 2));
  }, [dataToView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Modal size="lg" show={dataToView.data !== ''} onHide={() => setDataToView({form: '', data: ''})}>
      <Modal.Header closeButton>
        <Modal.Title>{'Details'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <pre>
          { jsonString }
        </pre>
      </Modal.Body>
      <Modal.Footer>
        {
          allowEdit ?
            <Button variant="primary" onClick={() => {
              setDataToEdit(dataToView);
              setDataToView({form: '', data: ''});
            }}>
              Edit
            </Button>
          : null
        }
        {
          postLink !== '' ?
            <Button variant="primary" onClick={()=>{}}>
              Submit
            </Button>
          : null
        }
        <Button variant="secondary" onClick={() => setDataToView({form: '', data: ''})}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ViewDataDialog;