import { Alert, Card, Button } from 'react-bootstrap';
import IconTooltip from 'components/IconTooltip';
import { useEffect, useState, useRef } from 'react';
import './style.scss';



function SpecialConsiderations(props) {

  const [show, setShow] = useState(false);
  
  const toggleNote = () => {
    setShow(!show);
    }


  return (
    <section id="special_considerations">
      <h2>Special Considerations (<Button variant="link" className="btn-toggle-link" data-bs-toggle="collapse" role="button" aria-expanded="false" onClick={toggleNote} aria-controls="specialConsiderationsNote">note</Button>)</h2>
      <Alert 
        show={show} 
        variant={'info'}
        dismissible
        onClose={() => setShow(false)}
      >
      Selecting these options will cause the CDS to consider these situations when computing a recommendation. This <strong>may or may not</strong> cause the recommendation to be changed, depending on the specific patient history.
      </Alert>
      
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isImmunosuppressed" />
        <label className="form-check-label" htmlFor="force_isImmunosuppressed">Immunosuppressed</label>
        <IconTooltip text="Is the patient immunocompromised? (i.e., Patient has HIV; Solid organ transplant or allogeneic hematopoietec stem cell transplant; systemic lupus erythematous; IBD or RA with immunosuppressive treatment)"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isPregnant" />
        <label className="form-check-label" htmlFor="force_isPregnant">Pregnant</label>
        <IconTooltip text="Is the patient currently pregnant?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isPregnantConcerned" />
        <label className="form-check-label" htmlFor="force_isPregnantConcerned">Future pregnancy concerns</label>
        <IconTooltip text="Does the patient have future pregnancy concerns?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_isSymptomatic" />
        <label className="form-check-label" htmlFor="force_isSymptomatic">Symptomatic (abnormal bleeding)</label>
        <IconTooltip text="Is the patient experiencing abnormal uterine or vaginal bleeding today?"></IconTooltip>
      </div>
      <hr />
    </section>
    )
}

export default SpecialConsiderations;
