import AddDataDialog from 'components/AddDataDialog';

function HistoryGroupModals(props) {
  const { 
    formInfo, 
    dataToEdit, 
    setDataToEdit, 
    setPatientData,
    resolver,
    patientReference
  } = props;
  
  return (
    <div>
      {
        Object.entries(formInfo).map((form,idx) => {
          const [
            formId, 
            {
              canonicalUri = '', 
              title = '', 
              preamble = ''
            }
          ] = form;
          let fhirQuestionnaire = resolver(canonicalUri);
          if (fhirQuestionnaire) {
            fhirQuestionnaire = fhirQuestionnaire.length > 0 ? fhirQuestionnaire[0] : {};
            const DataEntryForm = AddDataDialog(fhirQuestionnaire, {title,preamble}, resolver, patientReference, dataToEdit);
            return (
              <DataEntryForm key={idx} show={dataToEdit.form.canonicalUri === canonicalUri} handleClose={() => setDataToEdit({form: '', data: ''})} setPatientData={setPatientData} />
            )
          } else {
            return <div key={idx}></div>
          }
        })
      }
    </div>
  )
}

export default HistoryGroupModals;