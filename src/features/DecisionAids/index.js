import { Tabs, Tab } from 'react-bootstrap';
import Recommendations from 'features/DecisionAids/Recommendations';
import References from 'features/DecisionAids/References';
import Logic from 'features/DecisionAids/Logic';
import Timeline from 'features/DecisionAids/Timeline';

import './style.scss';

function DecisionAids(props) {
  const {
    input,
    onToggleStatusChange
  } = props;
  const { errors=[] } = input;
  const errorsExist = errors.length > 0;

  return (
    <section>
      <h2 className="visually-hidden">Decision Aids</h2>
      <Tabs defaultActiveKey={'recs'} className='mb-3'>
        <Tab eventKey={'recs'} title={'Recommendations'}>
          <Recommendations input={input} onToggleStatusChange={onToggleStatusChange} />
        </Tab>
        <Tab eventKey={'refs'} title={'References'} disabled={errorsExist}>
          <References input={input} />
        </Tab>
        {/* <Tab eventKey={'logx'} title={'Logic'} disabled={errorsExist}>
          <Logic input={input} />
        </Tab>
        <Tab eventKey={'time'} title={'Timeline'} disabled={errorsExist}>
          <Timeline input={input} />
        </Tab> */}
      </Tabs>
    </section>
  )
}

export default DecisionAids;