import { Alert, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import RiskEstimates from 'features/DecisionAids/RiskEstimates';

function Recommendations(props) {
  const { 
    input: {
      recommendation='',
      recommendationGroup='',
      recommendationDetails=[],
      disclaimer='',
      suggestedOrder='',
      riskTable={}
    } 
  } = props;

  const [show, setShow] = useState(disclaimer !== '');

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title as='h3'>{recommendation}</Card.Title>
          <Card.Subtitle as='h4'>{recommendationGroup}</Card.Subtitle>
          {
            recommendationDetails.map((detail,idx) => {
              return <Card.Text key={idx}>{detail}</Card.Text>
            })
          }
          <Alert show={show} variant='warning' dismissible onClose={() => setShow(false)}>
            {disclaimer}
          </Alert>
          {
            suggestedOrder === '' ?
              <Alert variant='info'>No Action Necessary</Alert> :
              <Button>Order test</Button>
          }
        </Card.Body>
      </Card>
      <RiskEstimates input={riskTable} />
    </div>
  )
}

export default Recommendations;