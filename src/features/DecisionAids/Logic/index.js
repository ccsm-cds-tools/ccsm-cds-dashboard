import CriteriaTable from './CriteriaTable.js';
import './style.scss';

function Logic(props) {
  const { 
    input: {
      recommendation='',
      recommendationGroup='',
      logicPath={},
      logicSummary='',
      logicCriteria=[]
    }
  } = props;

  return (
    <div>
      <h3>{recommendation}</h3>
      <h4 className='subtitle'>{recommendationGroup}</h4>
      <p className='logic-path'>
        <a href={logicPath?.reference}>
          {logicPath?.name}
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </p>
      <p>{logicSummary}</p>
      <CriteriaTable criteria={logicCriteria} />
    </div>
  )
}

export default Logic;