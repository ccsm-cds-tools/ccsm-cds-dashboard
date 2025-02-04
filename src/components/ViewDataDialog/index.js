import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { isEmpty } from 'lodash';

function ViewDataDialog(props) {

  const { 
    resolver, 
    dataToView,
    setDataToView,
    postLink='',
    setDataToEdit=()=>{}
  } = props;

  let [jsonString, setJsonString] = useState('');
  let [allowEdit, setAllowEdit] = useState(false);

  useEffect(() => {
    setJsonString(JSON.stringify(resolver(dataToView.data), null, 2));
    if (isEmpty(dataToView.form)) setAllowEdit(false);
     else setAllowEdit(true);
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
            <Button variant="success" onClick={()=>{}}>
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