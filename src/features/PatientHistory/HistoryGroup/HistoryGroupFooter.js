import { Button } from 'react-bootstrap';
import plusSquare from 'assets/plus-square.svg';

function HistoryGroupFooter(props) {
  const { addButtonInfo, setWhichModal } = props;
  return (
    <div>
      {
        Object.entries(addButtonInfo).map((abi,idx) => {
          const [formId, buttonText] = abi;
          return (
            <span key={idx}>
              {idx > 0 ? '|' : ''}
              <Button variant='link' onClick={() => setWhichModal(formId)} tabIndex={0} className='link-button'>
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