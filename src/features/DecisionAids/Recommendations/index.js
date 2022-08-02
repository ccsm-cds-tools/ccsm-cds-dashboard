import { Alert, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import ViewDataDialog from 'components/ViewDataDialog';
import RiskEstimates from 'features/DecisionAids/RiskEstimates';
import './style.scss';

function Recommendations(props) {
  const { 
    input: {
      recommendation='',
      recommendationGroup='',
      recommendationDetails=[],
      errors=[],
      disclaimer='',
      suggestedOrders='',
      riskTable={}
    },
    resolver=()=>{}
  } = props;

  const [show, setShow] = useState(disclaimer !== '');

  const errorsExist = errors.length > 0;
  if (show === false && errorsExist) setShow(true);

  const [dataToView, setDataToView] = useState('');

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title as='h3'>
            { 
              errorsExist ?
              <i className='bi bi-exclamation-triangle-fill text-danger'></i> :
              null
            }
            { 
              errorsExist ?
              'Cannot Make Recommendation' :
              recommendation
            }
          </Card.Title>
          <Card.Subtitle as='h4'>{recommendationGroup}</Card.Subtitle>
          {
            recommendationDetails.map((detail,idx) => {
              return <Card.Text key={idx}>{detail}</Card.Text>
            })
          }
          <Alert 
            show={show} 
            variant={errorsExist ? 'danger' : 'warning'}
            dismissible={!errorsExist}
            onClose={() => setShow(false)}
          >
            {
              errorsExist ?
                errors.map((err,idx) => <span key={idx}>{err}</span>) :
                disclaimer
            }
          </Alert>
          <RecommendationFooter areErrs={errorsExist} sugOrds={suggestedOrders} setDataToView={setDataToView} />
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
  else if (sugOrds.length === 0) return <Alert variant='info'>No Action Necessary</Alert>
  else return sugOrds.map(sugOrds => {
    let [order,reference] = Object.entries(sugOrds)[0];
    return <Button key={order} onClick={() => setDataToView(reference)}> Review {order} </Button>
  });
}

export default Recommendations;