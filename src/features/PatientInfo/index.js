import './style.scss';

function PatientInfo(props) {

  const {input} = props;
  console.log("Dashboard input: ", input)

  const dob = formatDateOfBirth(input?.dateOfBirth?.value);
  const ids = input.id ?? [];
  const mrn = getMrn(ids);
  // NOTE: Gender is no longer used in the patient-info display. Keeping the gender variable here, so that it can be added back in the future, if needed.
  const gender = capitalizeGender(input.gender); // eslint-disable-line no-unused-vars

  return (
    <section className="patient-info">
      <h1 className="patient-name">{input.name}</h1>
      <div className="patient-detail">
        <div className="id">
          <div><b>Date of Birth:</b> <span><time dateTime={dob}>{dob}</time></span> ({input.age} y.o.)</div>
          <div><b>MRN:</b> <span>{mrn}</span></div>
          <div><b>Pregnant:</b> <span>{input.isPregnant === false ? 'No' : input.isPregnant === true ? 'Yes' : null}</span></div>
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
    month.padStart(2,'0') + '/' +
    day.padStart(2,'0') + '/' +
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