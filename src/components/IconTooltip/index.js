import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './style.scss';

function IconTooltip(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const {
    text } = props;
    
  const renderTooltip = (props) => (
    <Tooltip {...props}
      className='my-tooltip'
    >
     {text}
    </Tooltip>
    );
      
  return (
    <OverlayTrigger
      delay={{ show: 250, hide:500 }}
      overlay={renderTooltip}

    >
      <span className="fs-5 mx-1 tooltipIcon"> <i className="bi bi-info-circle-fill"></i> </span>
    
    </OverlayTrigger>
  );
}

export default IconTooltip;


