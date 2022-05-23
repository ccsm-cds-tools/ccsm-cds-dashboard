import { Table } from 'react-bootstrap';
import './style.scss';

function RiskEstimates(props) {
  const {
    input: {
      title='',
      subtitle='',
      headers=[],
      relevant={},
      adjacent=[],
      clarifications=[]
    }
  } = props;

  return (
    <div className='risk'>
      <h4>{title} <a href='#info' className='fs-5'><i className='bi bi-info-circle-fill'></i></a></h4>
      <p className="text-secondary">{subtitle}</p>
      {
        Object.keys(relevant).length > 0 ? 
          <RiskTable 
            headers={headers} 
            relevant={relevant} 
            adjacent={adjacent} 
            clarifications={clarifications} 
          /> : null
      }
    </div>
  )
}

function RiskTable(props) {
  const {
    headers=[],
    relevant={},
    adjacent=[],
    clarifications=[]
  } = props;

  const numCols = headers.length;

  return (
    <Table className="risktable">
      <thead>
        <tr>
          { 
            headers.map((hdr,idx) => <th key={idx}>{hdr.display}</th>) 
          }
        </tr>
      </thead>
      <tbody>
        <tr className='highlight'>
          {
            headers.map((hdr,idx) => <td key={idx}>{relevant[hdr.key]}</td>)
          }
        </tr>
        {
          adjacent.map((adj,rowIdx) => {
            return (
              <tr key={rowIdx}>
                {
                  headers.map((hdr,colIdx) => <td key={colIdx}>{adj[hdr.key]}</td>)
                }
              </tr>
            )
          })
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={numCols}>
            {
              clarifications.map((clr,idx) => <div key={idx}>{clr}</div>)
            }
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default RiskEstimates;