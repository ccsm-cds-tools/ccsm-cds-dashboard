import { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import './TimelineTable.scss';

function TimelineTable (props) {
  const { 
    projection=[]
  } = props;

  return (
    <Table className="table-timeline">
      <thead>
        <tr>
          <th className="col-7">Events</th>
          <th className="col-5">Patient Status</th>
        </tr>
      </thead>
      {
        projection.map((prj,idx) => {
          return (
            <ProjectionGroup projection={prj} key={idx} />
          )
        })
      }
    </Table>
  )
}

function ProjectionGroup(props) {
  const { 
    projection: {
      era='',
      status='',
      options=[]
    } 
  } = props;
  return (
    <tbody>
      <tr className="group">
        <td><b>{era}</b></td>
        <td></td>
      </tr>
      <tr>
        <td>
          {
            options.map((opt,idx) => {
              return (
                <Fragment key={idx}>
                  { idx > 0 ? <p>OR</p> : null }
                  <EraOption option={opt} />
                </Fragment>
              )
            })
          }
        </td>
        <td>
          {status}
        </td>
      </tr>
    </tbody>
  )
}

function EraOption(props) {
  const {
    option: {
      activity='',
      period='',
      detail='',
      duration=''
    }
  } = props;
  return (
    <div>
      <div className="timestate">
        <b>{activity}</b>
        <span className="period">{period}</span>
        <p>{detail}</p>
      </div>
      <p className="timerange">{duration}</p>
    </div>
  )
}

export default TimelineTable;