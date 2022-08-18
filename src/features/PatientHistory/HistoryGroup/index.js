import { useState } from 'react';
import SortableTable from 'components/SortableTable';
import ViewDataDialog from 'components/ViewDataDialog';
import HistoryGroupFooter from './HistoryGroupFooter.js';
import HistoryGroupModals from './HistoryGroupModals.js';

import './styles.scss';

function HistoryGroup(props) {

  const { 
    meta: {
      title='',
      heading: {
        filled='',
        empty=''
      },
      tables=[]
    }, 
    tableData,
    resolver,
    setPatientData,
    patientReference
  } = props;

  const [dataToView, setDataToView] = useState({form: '', data: ''});
  const [dataToEdit, setDataToEdit] = useState({form: '', data: ''});

  const addButtonInfo = tables.reduce((acc,tbl) => {
    if (tbl?.addButtonText) return {...acc, [tbl.name]: tbl.addButtonText}
    else return acc
  }, {});
  
  const formInfo = tables.reduce((acc,tbl) => {
    if (tbl?.form) return {...acc, [tbl.name]: tbl.form}
    else return acc
  }, {});
  
  const noHistory = Object.values(tableData).reduce((acc,tbl) => {
    return acc && tbl.length === 0;
  }, true);

  return (
    <div className="history-group">
      <h2>{title}</h2>
      <HistoryGroupHeading headingText={noHistory ? empty : filled} />
      {
        Object.entries(tableData).map((data,idx) => {
          const [tableName,rowData] = data;
          const header = tables.find(tbl => tbl.name === tableName).header;
          return (
            <SortableTable key={idx} header={header} rowData={rowData} formInfo={formInfo[tableName]} setDataToView={setDataToView}/>
          )
        })
      }
      <HistoryGroupFooter 
        addButtonInfo={addButtonInfo} 
        formInfo={formInfo}
        setDataToEdit={setDataToEdit} 
      />
      <HistoryGroupModals 
        formInfo={formInfo} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit} 
        setPatientData={setPatientData}
        resolver={resolver}
        patientReference={patientReference}
      />
      <ViewDataDialog 
        resolver={resolver} 
        dataToView={dataToView} 
        setDataToView={setDataToView} 
        setDataToEdit={setDataToEdit}
      />
   </div>
  )

}

function HistoryGroupHeading(props) {
  const { headingText } = props;
  return <p className="subhead">{headingText}</p>
}

export default HistoryGroup;