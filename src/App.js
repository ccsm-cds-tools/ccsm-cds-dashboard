
import './App.scss';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import TestPatientSelector from 'test/TestPatientSelector';
import TestPatient from 'test/TestPatient';
import Dashboard from 'features/Dashboard';

document.body.className = 'bg-light';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/tests" >
            <Route path=":testName" element={<TestPatient />} />
            <Route index element={<TestPatientSelector/>} />
          </Route>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
