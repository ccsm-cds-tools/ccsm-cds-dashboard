import { LOGGER_URL, LOGGER_ENABLED } from 'util/logger';
import './style.scss';

function StatusBar(props) {
  const { 
    logStatus, 
    applyTime
  } = props;

  return (
        <div className="cds-status">
          <span>CDS Apply Time: {applyTime}ms</span>
          {LOGGER_ENABLED && (
            <span> | <span title={LOGGER_URL + " - " + logStatus}>Log Status: <span id="log_status" className={logStatus}>&diams;</span></span></span>
          )}
        </div>
  )
}

export default StatusBar;
