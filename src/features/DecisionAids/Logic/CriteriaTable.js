import { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import './CriteriaTable.scss';

function CriteriaTable (props) {
  const { criteria=[] } = props;

  return (
    <Table className="table-logic">
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        criteria.map((crt,idx) => {
          const {title,groups} = crt;
          return (
            <tbody key={idx}>
              <tr className="group">
                <th colSpan="3">{title}</th>
              </tr>
              <CriteriaGroup groups={groups} />
            </tbody>
          )
        })
      }
    </Table>
  )
}

function CriteriaGroup(props) {
  const { groups=[] } = props;
  if (groups.length === 0) {
    return (
      <Fragment>
        <EmptryGroup stepClass={'step'} />
      </Fragment>
    )
  } else {
    return (
      groups.map((grp,idx) => {
        const {name,items} = grp;
        return (
          <Fragment key={idx}>
            <tr>
              <td colSpan='3' className='step'>
                {name}
              </td>
              <td></td>
              <td></td>
            </tr>
            <CriteriaItems items={items} stepClass='step-value' />
          </Fragment>
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

function CriteriaItems(props) {
  const { items, stepClass } = props;
  if (items.length === 0) {
    return <Fragment></Fragment> //<EmptryGroup stepClass={stepClass} />
  } else {
    return (
      items.map((grp,idx) => {
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



export default CriteriaTable;