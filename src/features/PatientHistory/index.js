import HistoryGroup from 'features/PatientHistory/HistoryGroup';

function PatientHistory(props) {
  const {
    input,
    resolver,
    config: {
      histories=[]
    },
    setPatientData,
    resourceConverter
  } = props;

  return (
    <section>
      {
        histories.map((h,idx) => {
          const tableData = collateTableData(h.tables, input);
          return (
            <HistoryGroup 
              key={idx} 
              meta={h} 
              tableData={tableData} 
              resolver={resolver} 
              setPatientData={setPatientData} 
              resourceConverter={resourceConverter}
            />
          )
        })
      }
    </section>
  )
}

function collateTableData(tables, input) {
  return tables.reduce((acc,table) => {
    const key = table.name;
    const value = input[key];
    return {
      ...acc,
      [key]: value ?? []
    }
  },{});
}

export default PatientHistory;