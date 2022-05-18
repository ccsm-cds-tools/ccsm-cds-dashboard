import { Form } from 'react-bootstrap';

export function RelevantHistoryForm(props) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formAddCondition'>
        <Form.Label>Add Relevant Condition</Form.Label>
        <Form.Control type='text' list='datalistOptions' placeholder='Type to search...' />
        <datalist id='datalistOptions'>
          <option value='Condition 1...' />
          <option value='Condition 2...' />
          <option value='Some condition 3' />
          <option value='Another condition 4' />
          <option value='Condition 5' />
        </datalist>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-4' controlId='formConditionDate'>
        <Form.Label>Date</Form.Label>
        <Form.Control type='date' className='col-lg-2' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formConditionText'>
        <Form.Label>Notes</Form.Label>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formConditionCheckbox'>
        <Form.Check type='checkbox' label='Some option' />
      </Form.Group>
    </Form>
  )
}