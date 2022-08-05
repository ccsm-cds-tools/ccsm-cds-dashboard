import { Button } from 'react-bootstrap';
import plusSquare from 'assets/plus-square.svg';

function HistoryGroupFooter(props) {
  const { 
    addButtonInfo, 
    formInfo,
    setDataToEdit 
  } = props;

  return (
    <div>
      {
        Object.entries(addButtonInfo).map((abi,idx) => {
          const [formId, buttonText] = abi;
          return (
            <span key={idx}>
              {idx > 0 ? '|' : ''}
              <Button variant='link' onClick={() => setDataToEdit({form: formInfo[formId], data: ''})} tabIndex={0} className='link-button'>
                <img src={plusSquare} alt='' role='presentation' />
                {buttonText}
              </Button>
            </span>
          )
        })
      }
    </div>
  )
}

export default HistoryGroupFooter;