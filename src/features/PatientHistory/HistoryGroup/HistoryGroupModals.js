import AddDataDialog from 'components/AddDataDialog';

function HistoryGroupModals(props) {
  const { 
    formInfo, 
    whichModal, 
    setWhichModal, 
    setPatientData,
    resourceConverter,
    resolver
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
            const DataEntryForm = AddDataDialog(fhirQuestionnaire, {title,preamble}, resourceConverter, resolver);
            return (
              <DataEntryForm key={idx} show={whichModal === formId} handleClose={() => setWhichModal('')} setPatientData={setPatientData}/>
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