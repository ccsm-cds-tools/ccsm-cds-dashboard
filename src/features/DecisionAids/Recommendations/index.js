import { Alert, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
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
      suggestedOrder='',
      riskTable={}
    } 
  } = props;

  const [show, setShow] = useState(disclaimer !== '');

  const errorsExist = errors.length > 0;
  if (show === false && errorsExist) setShow(true);

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
              'Cannot make recommendation' :
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
          <RecommendationFooter areErr={errorsExist} sugOrd={suggestedOrder} />
        </Card.Body>
      </Card>
      {
        Object.keys(riskTable).length > 0 ?
          <RiskEstimates input={riskTable} /> :
          null
      }
    </div>
  )
}

function RecommendationFooter(props) {
  const {areErr,sugOrd} = props;
  if (areErr) return null
  else if (sugOrd === '') return <Alert variant='info'>No Action Necessary</Alert>
  else return <Button>Order test</Button>
}

export default Recommendations;