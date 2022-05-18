import './style.scss';

function PatientInfo(props) {

  const {input} = props;

  return (
    <section className="patient-info">
      <div className="patient-name">{input.name}</div>
      <div className="patient-detail">
        <div className="mrn">
          <div className="float-end"><a href="fake_ehr.html" className="view">View patient in EHR</a></div>
          <div><b>Account Number:</b> <span>{input.mrn}</span></div>
          <div><b>Pregnant:</b> <span>{input.pregnant}</span></div>
        </div>
        <div className="info-items">
          <div className="row">
            <div className="col">
              <div className="info-item">
                <b>Date of Birth</b> <span><time dateTime="1994-01-20">{input.dob}</time></span>
              </div>
              <div className="info-item">
                <b>Sex at Birth</b>
                <span>{input.sab}</span>
              </div>
            </div>
            <div className="col">
              <div className="info-item">
                <b>Age</b> <span>{input.age}</span>
              </div>
              <div className="info-item">
                <b>Gender</b> <span>{input.gender}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="info-item">
                <b>Preferred Language</b> <span>{input.language}</span>
              </div>
              <div className="info-item">
                <b>Race/Ethnicity</b> <span>{input.race}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientInfo;