import './style.scss';

function PatientInfo(props) {

  const {input} = props;
  console.log("Dashboard input: ", input)

  const dob = formatDateOfBirth(input?.dateOfBirth?.value);
  const ids = input.id ?? [];
  const mrn = getMrn(ids);
  const gender = capitalizeGender(input.gender);

  return (
    <section className="patient-info">
      <div className="patient-name">{input.name}</div>
      <div className="patient-detail">
        <div className="id">
          {/* <div className="float-end"><a href="fake_ehr.html" className="view">View patient in EHR</a></div> */}
          <div><b>MRN:</b> <span>{mrn}</span></div>
          <div><b>Pregnant:</b> <span>{input.isPregnant === false ? 'No' : input.isPregnant === true ? 'Yes' : null}</span></div>
        </div>
        <div className="info-items">
          <div className="row">
            <div className="col">
              <div className="info-item">
                <b>Date of Birth</b> <span><time dateTime={dob}>{dob}</time></span>
              </div>
              <div className="info-item">
                <b>Sex at Birth</b>
                <span>{input.sexAtBirth}</span>
              </div>
            </div>
            <div className="col">
              <div className="info-item">
                <b>Age</b> <span>{input.age}</span>
              </div>
              <div className="info-item">
                <b>Gender</b> <span>{gender}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="info-item">
                <b>Preferred Language</b> <span>{input.primaryLanguage}</span>
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

function formatDateOfBirth(dateOfBirth) {
  const day = String(dateOfBirth?.day ?? '');
  const month = String(dateOfBirth?.month ?? '');
  const year = String(dateOfBirth?.year ?? '');

  const dobString = 
    month.padStart(2,'0') + ' / ' +
    day.padStart(2,'0') + ' / ' +
    year;

  return dateOfBirth ? dobString : null;
}

function getMrn(ids) {
  if (ids.length > 0) {
    const mrnTextValues = ["MRN", "MR", "Medical Record Number"]
    const mrn = ids.find(id => 
      mrnTextValues.includes(id.type?.text.value)||
      (id.type?.coding && mrnTextValues.includes(id.type?.coding[0].code.value))
    );
    return mrn ? mrn.value.value : 'Unknown';  
  } else {
    return 'Unknown';
  }
}

function capitalizeGender(inputGender) {
  return inputGender ? inputGender.charAt(0).toUpperCase() + inputGender.slice(1) : '';
}