import { Button, Modal } from 'react-bootstrap';

function ViewDataDialog(props) {

  const { 
    resolver, 
    dataToView,
    setDataToView,
    postLink=''
  } = props;

  return (
    <Modal size="lg" show={dataToView !== ''} onHide={() => setDataToView('')}>
      <Modal.Header closeButton>
          <Modal.Title>{'Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>
            { JSON.stringify(resolver(dataToView), null, 2) }
          </pre>
        </Modal.Body>
        <Modal.Footer>
          {
            postLink !== '' ?
              <Button variant="primary" onClick={()=>{}}>
                Order
              </Button>
            : null
          }
          <Button variant="secondary" onClick={() => setDataToView('')}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ViewDataDialog;