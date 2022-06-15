import { Table, Button } from 'react-bootstrap';
import { useSortableData } from './useSortableData.js';
import './style.scss';

function SortableTable(props) {
  const {
    header=[], 
    rowData=[], 
    setDataToView=()=>{}
  } = props;
  const { items, requestSort, sortConfig } = useSortableData(rowData);
  const ascendingOrDescending = (name) => {
    return sortConfig?.key === name ? sortConfig.direction : 'none';
  };

  if (items.length === 0) return <div></div>
  else return(
    <Table className='sortable'>
      <thead>
        <tr>{ 
          header.map((hdr,idx) => {
            const ascOrDes = ascendingOrDescending(hdr.key);
            return (
              <th 
                key={idx}
                aria-sort={ascOrDes}
                className={ascOrDes !== 'none' ? 'sorted' : null}
              >
                <button
                  tabIndex='0'
                  onClick={() => requestSort(hdr.key)}
                  aria-pressed={ascOrDes !== 'none'}
                >
                  <span className='header-text'>
                    {hdr.display}
                  </span>
                  <span className='sorting-symbol'>
                    { ascOrDes === 'descending' ? '▼' : '▲' }
                  </span>
                </button>
              </th>
            )
          }) 
        }</tr>
      </thead>
      <tbody>{ // TODO: Pipe in View link
        items.map((itm,idx) => {
          const incompleteClass = itm?.status === 'incomplete' ? 'incomplete' : '';
          return (
            <tr className={incompleteClass} key={idx}>
              { header.map((hdr,hid) => <td key={hid}>{RenderRowElement(hdr,itm,setDataToView)}</td>) }
            </tr>
          )
        })
      }</tbody>
      <tfoot>{/* TODO: Make this appear only if manual data has been added */}
        <tr>
          <td colSpan="5"><span className="is_manual">*</span> indicates manually entered patient test history result</td>
        </tr>
      </tfoot>
    </Table>
  )
}

function RenderRowElement(hdr, itm, setDataToView) {
  const { key } = hdr;
  const incompleteClass = itm?.status === 'incomplete' ? 'incomplete' : '';
  if (key === 'date') return (
    <time className={incompleteClass} dateTime={itm.date}>
      {itm.date}
    </time>
  )
  else if (key === 'status') {
    return (
      <Button variant="link" onClick={() => setDataToView(itm?.reference)}>
        {
          itm?.status === 'incomplete' ? 'Review' : 'View'
        }
      </Button>
    )
  }
  else return <span className={incompleteClass}>{itm[key] ?? ''}</span>
}

export default SortableTable;