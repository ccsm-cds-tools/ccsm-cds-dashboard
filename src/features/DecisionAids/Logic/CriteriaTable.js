import { Table } from 'react-bootstrap';
import './CriteriaTable.scss';

function CriteriaTable (props) {
  const { 
    input: {
      inclusion=[],
      exclusion=[],
      basis={}
    }
  } = props;

  return (
    <Table className="table-logic">
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="group">
          <td colSpan="3"><b>Inclusion</b></td>
        </tr>
        <CriteriaGroup groups={inclusion} stepClass={'step'} />
        <tr className="group">
          <td colSpan="3"><b>Exclusion</b></td>
        </tr>
        <CriteriaGroup groups={exclusion} stepClass={'step'} />
      </tbody>
      <tbody>
        <tr className="group"><td colSpan="3"><b>{basis.title}</b></td></tr>
      </tbody>
      <BasisGroup groups={basis.groups} />
    </Table>
  )
}

function CriteriaGroup(props) {
  const { groups, stepClass } = props;
  if (groups.length === 0) {
    return <EmptryGroup stepClass={stepClass} />
  } else {
    return (
      groups.map((grp,idx) => {
        return (
          <tr key={idx}>
            <td colSpan={grp.date ? 1 : 2} className={stepClass}>
              {grp.criteria}
            </td>
            { grp.date ? <td>{grp.date}</td> : null }
            <td>{grp.action}</td>
          </tr>
        )
      })
    )
  }
}

function BasisGroup(props) {
  const { groups=[] } = props;
  if (groups.length === 0) {
    return (
      <tbody>
        <EmptryGroup className={'step'} />
      </tbody>
    )
  } else {
    return (
      groups.map((grp,idx) => {
        return (
          <tbody key={idx} className='basis'>
            <tr>
              <td colSpan='3' className='step'>
                {grp.name}
              </td>
              <td></td>
              <td></td>
            </tr>
            <CriteriaGroup groups={grp.steps} stepClass='step-value' />
          </tbody>
        )
      })
    )
  }
}

function EmptryGroup(props) {
  const { stepClass } = props;
  return (
    <tr>
      <td colSpan='2' className={stepClass}>None present</td>
      <td><a href='#edit'>Edit</a></td>
    </tr>
  )
}

export default CriteriaTable;