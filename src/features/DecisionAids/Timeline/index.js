import TimelineTable from './TimelineTable.js';
import './style.scss';

function Timeline(props) {
  const { 
    input: {
      recommendation='',
      recommendationGroup='',
      logicPath={},
      timeline: {
        explanation='',
        projection=[]
      }
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
      <p>{explanation}</p>
      <TimelineTable projection={projection} />
    </div>
  )
}

export default Timeline;