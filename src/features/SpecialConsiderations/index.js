import { Alert, Card, Button } from 'react-bootstrap';
import IconTooltip from 'components/IconTooltip';
import { useEffect, useState, useRef } from 'react';
import './style.scss';



function SpecialConsiderations(props) {
  let {
    onToggleStatusChange
  } = props;


  const [show, setShow] = useState(false);
  const [toggleStatus, setToggleStatus] = useState({
    isImmunosuppressed: false,
    isPregnant: false,
    isPregnantConcerned: false,
    isSymptomatic: false
  });

  useEffect(() => {
    onToggleStatusChange(toggleStatus);
  }, [toggleStatus]);

  const toggleNote = () => {
    setShow(!show);
  }

  const handleImmunosuppressedChange = (event) => {
    setToggleStatus({ ...toggleStatus, isImmunosuppressed: event.target.checked });
  };

  const handlePregnantChange = (event) => {
    setToggleStatus({ ...toggleStatus, isPregnant: event.target.checked });
  };

  const handlePregnantConcernedChange = (event) => {
    setToggleStatus({ ...toggleStatus, isPregnantConcerned: event.target.checked });
  };

  const handleSymptomaticChange = (event) => {
    setToggleStatus({ ...toggleStatus, isSymptomatic: event.target.checked });
  };



  return (
    <section id="special_considerations">
      <h2>Patient Clinical Considerations (<Button variant="link" className="btn-toggle-link" data-bs-toggle="collapse" role="button" aria-expanded="false" onClick={toggleNote} aria-controls="specialConsiderationsNote">note</Button>)</h2>
      <Alert
        show={show}
        variant={'info'}
        dismissible
        onClose={() => setShow(false)}
      >
      Use these options to indicate patient considerations that may not be documented or available to the CDS. Selecting one or more of these will cause the CDS to consider these when providing a recommendation. This <b>may or may not</b> cause the recommendation to change, depending on the specific patient history.
      </Alert>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isImmunosuppressed" checked={toggleStatus.isImmunosuppressed} onChange={handleImmunosuppressedChange} />
        <label className="form-check-label" htmlFor="force_isImmunosuppressed">Immunosuppressed</label>
        <IconTooltip text="Is the patient immunocompromised? (i.e., Patient has HIV; Solid organ transplant or allogeneic hematopoietec stem cell transplant; systemic lupus erythematous; IBD or RA with immunosuppressive treatment)"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isPregnant" checked={toggleStatus.isPregnant} onChange={handlePregnantChange} disabled={toggleStatus.isPregnantConcerned}/>
        <label className="form-check-label" htmlFor="force_isPregnant">Pregnant</label>
        <IconTooltip text="Is the patient currently pregnant?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isPregnantConcerned" checked={toggleStatus.isPregnantConcerned} onChange={handlePregnantConcernedChange} disabled={toggleStatus.isPregnant} />
        <label className="form-check-label" htmlFor="force_isPregnantConcerned">Future pregnancy concerns</label>
        <IconTooltip text="Does the patient have future pregnancy concerns?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isSymptomatic" checked={toggleStatus.isSymptomatic} onChange={handleSymptomaticChange} />
        <label className="form-check-label" htmlFor="force_isSymptomatic">Symptomatic (abnormal bleeding)</label>
        <IconTooltip text="Is the patient experiencing abnormal uterine or vaginal bleeding today?"></IconTooltip>
      </div>
      <hr />
    </section>
  )
}

export default SpecialConsiderations;
