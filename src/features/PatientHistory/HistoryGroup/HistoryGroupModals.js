import AddDataDialog from 'components/AddDataDialog';

function HistoryGroupModals(props) {
  const { formInfo, whichModal, setWhichModal, addHistory } = props;
  return (
    <div>
      {
        Object.entries(formInfo).map((form,idx) => {
          const [
            formId, 
            {
              handle = ()=>{}, 
              title = '', 
              preamble = ''
            }
          ] = form;
          const DataEntryForm = AddDataDialog(handle, {title,preamble});
          return (
            <DataEntryForm key={idx} show={whichModal === formId} handleClose={() => setWhichModal('')} addHistory={addHistory}/>
          )
        })
      }
    </div>
  )
}

export default HistoryGroupModals;