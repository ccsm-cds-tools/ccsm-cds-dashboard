import { Alert, Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ViewDataDialog from 'components/ViewDataDialog';
import RiskEstimates from 'features/DecisionAids/RiskEstimates';
import './style.scss';

function Recommendations(props) {
  let { 
    input: {
      recommendation='',
      recommendationGroup='',
      recommendationDetails=[],
      recommendationDate='',
      errors=[],
      disclaimer='',
      suggestedOrders='',
      riskTable={}
    },
    resolver=()=>{}
  } = props;

  if (riskTable === null) riskTable = {};
  else {
    if (riskTable?.relevant?.immediateRisk && riskTable.relevant.immediateRisk === -1) {
      riskTable.relevant.immediateRisk =  'N/A';
    }
    if (riskTable?.relevant?.fiveYearRisk && riskTable.relevant.fiveYearRisk === -1) {
      riskTable.relevant.fiveYearRisk =  'N/A';
    }
  }

  const [show, setShow] = useState(errors.length > 0 || disclaimer !== '');

  useEffect(() => {
    if (errors.length > 0 || disclaimer !== '') setShow(true);
    else setShow(false);
  },[errors, disclaimer]);

  const [dataToView, setDataToView] = useState({form: '', data: ''});

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title as='h3'>
            { 
              errors.length > 0 ?
              <i className='bi bi-exclamation-triangle-fill text-danger'></i> :
              null
            }
            { 
              errors.length > 0 ?
                'Cannot Make Recommendation' :
                recommendation === '' ?
                  'No Recommendation' :
                  recommendation
            }
          </Card.Title>
          <Card.Subtitle as='h4'>
            <div>{recommendationGroup}</div>
            <div>{recommendationDate != '' ? 'Due: ' + recommendationDate : null}</div>
          </Card.Subtitle>
          {
            recommendationDetails.map((detail,idx) => {
              return <Card.Text key={idx}>{detail}</Card.Text>
            })
          }
          <Alert 
            show={show} 
            variant={errors.length > 0 ? 'danger' : 'warning'}
            dismissible={errors.length === 0}
            onClose={() => setShow(false)}
          >
            {
              errors.length > 0 ?
                errors.map((err,idx) => <span key={idx}>{err}</span>) :
                disclaimer
            }
          </Alert>
          <RecommendationFooter areErrs={errors.length > 0} sugOrds={suggestedOrders} setDataToView={setDataToView} />
          <ViewDataDialog resolver={resolver} dataToView={dataToView} setDataToView={setDataToView} />
        </Card.Body>
      </Card>
      <RiskEstimates input={riskTable} />
    </div>
  )
}

function RecommendationFooter(props) {
  const {
    areErrs,
    sugOrds,
    setDataToView
  } = props;
  if (areErrs) return null
  else if (sugOrds.length === 0) return null //return <Alert variant='info'>No Action Necessary</Alert>
  else return sugOrds.map(sugOrds => {
    let [order,reference] = Object.entries(sugOrds)[0];
    return <Button key={order} onClick={() => setDataToView({form: '', data: reference})}> Order {order} </Button>
  });
}

export default Recommendations;