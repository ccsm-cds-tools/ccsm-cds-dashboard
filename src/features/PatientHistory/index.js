import HistoryGroup from 'features/PatientHistory/HistoryGroup';

function PatientHistory(props) {
  const {
    input,
    resolver,
    config: {
      histories=[]
    },
    setPatientData,
    patientReference
  } = props;

  return (
    <section id="histories">
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
              patientReference={patientReference}
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
    let value = input[key] ?? [];
    // Set status based upon whether there is a value
    value = value.map(v => {
      return {
        ...v,
        status: v.value || !table.header.some(h => h.key === 'value') ? 'complete' : 'incomplete'
      };
    });
    return {
      ...acc,
      [key]: value ?? []
    }
  },{});
}

export default PatientHistory;