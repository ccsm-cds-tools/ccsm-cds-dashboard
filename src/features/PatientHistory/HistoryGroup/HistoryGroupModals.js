import AddDataDialog from 'components/AddDataDialog';

function HistoryGroupModals(props) {
  const { 
    formInfo, 
    whichModal, 
    setWhichModal, 
    setPatientData 
  } = props;
  
  return (
    <div>
      {
        Object.entries(formInfo).map((form,idx) => {
          const [
            formId, 
            {
              json = ()=>{}, 
              title = '', 
              preamble = ''
            }
          ] = form;
          const DataEntryForm = AddDataDialog(json, {title,preamble});
          return (
            <DataEntryForm key={idx} show={whichModal === formId} handleClose={() => setWhichModal('')} setPatientData={setPatientData}/>
          )
        })
      }
    </div>
  )
}

export default HistoryGroupModals;