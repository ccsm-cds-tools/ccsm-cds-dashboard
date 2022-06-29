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
    resourceConverter
  } = props;

  const [whichModal, setWhichModal] = useState('');
  const [dataToView, setDataToView] = useState('');

  const addButtonInfo = tables.reduce((acc,tbl) => ({...acc, [tbl.name]: tbl.addButtonText}), {});
  const formInfo = tables.reduce((acc,tbl) => ({...acc, [tbl.name]: tbl.form}), {});
  
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
            <SortableTable key={idx} header={header} rowData={rowData} setDataToView={setDataToView}/>
          )
        })
      }
      <HistoryGroupFooter addButtonInfo={addButtonInfo} setWhichModal={setWhichModal} />
      <HistoryGroupModals 
        formInfo={formInfo} 
        whichModal={whichModal} 
        setWhichModal={setWhichModal} 
        setPatientData={setPatientData}
        resourceConverter={resourceConverter}
        resolver={resolver}
      />
      <ViewDataDialog resolver={resolver} dataToView={dataToView} setDataToView={setDataToView} />
   </div>
  )

}

function HistoryGroupHeading(props) {
  const { headingText } = props;
  return <p className="subhead">{headingText}</p>
}

export default HistoryGroup;