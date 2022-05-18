import HistoryGroup from 'features/PatientHistory/HistoryGroup';

function PatientHistory(props) {
  const {
    input,
    config: {
      histories=[]
    }
  } = props;

  return (
    <section>
      {
        histories.map((h,idx) => {
          const tableData = collateTableData(h.tables, input);
          return (
            <HistoryGroup key={idx} meta={h} tableData={tableData} />
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