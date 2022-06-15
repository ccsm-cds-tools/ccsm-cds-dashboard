import { Button, Modal } from 'react-bootstrap';

function ViewDataDialog(props) {

  const { resolver, dataToView, setDataToView } = props;

  return (
    <Modal size="lg" show={dataToView !== ''} onHide={() => setDataToView('')}>
      <Modal.Header closeButton>
          <Modal.Title>{'title'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>
            { JSON.stringify(resolver(dataToView), null, 2) }
          </pre>
        </Modal.Body>
        <Modal.Footer>
          {/*<Button variant="primary" onClick={handleClose}>
            Submit
  </Button>*/}
          <Button variant="secondary" onClick={() => setDataToView('')}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ViewDataDialog;