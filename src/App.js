
import './App.scss';
import { Container } from 'react-bootstrap';
// NOTE: BrowserRouter does not work with Github Pages. For deployment, must 
// replace with [HashRouter](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing).
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import TestPatientSelector from 'test/basic/TestPatientSelector';
import TestPatient from 'test/basic/TestPatient';
import { TestPatient as FhirTestPatient } from 'test/fhir/TestPatient';

document.body.className = 'bg-light';

function App() {
  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path="/tests-basic" >
            <Route path=":testName" element={<TestPatient />} />
            <Route index element={<TestPatientSelector/>} />
          </Route>
          <Route path="/tests-fhir" >
            <Route path=":testName" element={<FhirTestPatient />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
