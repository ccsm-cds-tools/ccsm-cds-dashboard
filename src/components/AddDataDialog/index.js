import { Button, Modal } from 'react-bootstrap';

function AddDataDialog(DataEntryComponent, meta) {

  const { title, preamble } = meta;

  return function(props) {
    const { show, handleClose } = props;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{preamble}</p>
            <DataEntryComponent />
          </Modal.Body>
          <Modal.Footer> {/* TODO: Submitting should create data. */}
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
      </Modal>
    )
  }
}

export default AddDataDialog;