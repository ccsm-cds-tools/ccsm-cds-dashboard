import { Button, Table } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import './style.scss';

function RiskEstimates(props) {
  let {
    input: {
      title='',
      subtitle='',
      headers=[],
      relevant={},
      adjacent=[],
      clarifications=[]
    }
  } = props;
  const { input } = props;

  const [show, setShow] = useState(false);
  
  const toggleTable = () => {
    setShow(!show);
  }
    
  if (Object.keys(input).length === 0) return null;

  headers = headers ?? [];
  relevant = relevant ?? {};
  adjacent = adjacent ?? [];
  clarifications = clarifications ?? [];

  return (
    <div className='risk'>
      <div className="risk-header">
      <h4>{title}</h4>
      <Button variant="link" className="btn-toggle-link" data-bs-toggle="collapse" role="button" aria-expanded="false" onClick={toggleTable} aria-controls="risktable">Show</Button>
      </div>
      <p className="text-secondary">{subtitle}</p>
      
      
      {
        Object.keys(relevant).length > 0 && show ? 
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
    <Table className="risktable" id="risktable">
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