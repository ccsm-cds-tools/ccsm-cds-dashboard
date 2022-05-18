import logo from 'assets/ccsm-tulip.svg';
import './TestPatientSelector.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Load the test data
import { testData } from './testData';

// Convert test data to arrays grouped by type (common, missing data, and in-progress tests)
const testDataArray = Object.entries(testData);
const commonPatients = ['paulina','susan','lily','erica','darla','catherine','alice','barb','jill'];
const commonData = testDataArray.filter(tda => commonPatients.includes(tda[0])).map(tda => {
  return {
    key: tda[0], 
    ...tda[1]
  }
});
const commonPad = 1;
const incompletePatients = ['lilyx','catherinex','ericax','paulinax'];
const incompleteData = testDataArray.filter(tda => incompletePatients.includes(tda[0])).map(tda => {
  return {
    key: tda[0], 
    ...tda[1]
  }
});
const incompletePad = commonPad + commonData.length;
const inprogressPatients = ['bernadette','tanya','shana','lisa'];
const inprogressData = testDataArray.filter(tda => inprogressPatients.includes(tda[0])).map(tda => {
  return {
    key: tda[0], 
    ...tda[1]
  }
});
const inprogressPad = incompletePad + incompleteData.length;

export default function TestPatientSelector() {
  return (
    <div>
      <div className="hero">
        <img src={logo} alt="Cervical Cancer CDS Tulip logo"/>
        <h1>CCSM-CDS</h1>
        <h2 className="subtitle">Cervical Cancer Screening and Management<br/>Clinical Decision Support</h2>
      </div>

      <h3>User Interface Interactive Mockups</h3>
      <b>Author:</b> Mike Nosal (<a href="mailto:mnosal@mitre.org">mnosal@mitre.org</a>)<br/>
      <b>Interface Last Updated:</b> Apr 4, 2022<br/>

      <div className="sitemap">

        <Table className="index-table">

          <thead>
            <tr>
              <th><span className="visually-hidden">Sample Patient Number</span></th>
              <th>Sample Patient Name</th>
              <th>Matrix</th>
              <th>Age</th>
              <th>Type of Scenario</th>
              <th>Last Update</th>
            </tr>
          </thead>

          <tbody>
            <tr className="group">
              <td colSpan="6">Common Scenario Patients</td>
            </tr>
            { commonData.map((rd,idx) => <IndexRow key={idx} index={commonPad+idx} rowData={rd} />) }

            <tr className="group">
              <td colSpan="6">Missing/Incomplete Patient Data</td>
            </tr>
            { incompleteData.map((rd,idx) => <IndexRow key={idx} index={incompletePad+idx} rowData={rd} />) }
            
            <tr className="group">
              <td colSpan="6">In-progress Patients - Not yet complete</td>
            </tr>
            { inprogressData.map((rd,idx) => <IndexRow key={idx} index={inprogressPad+idx} rowData={rd} />) }

          </tbody>
        </Table>

      </div>

      <h3>Notes</h3>
      <ul className="notelist">
        <li>Patient names follow the convention used by the synthetic-patient generator <a href="https://github.com/synthetichealth/synthea">Synthea&trade;</a>. Random digits are appended to the patient's name to indicate they are artificially generated, and <b>never</b> based on any real person who may have the same name.</li>
        <li>Real-world patients may have incomplete or irregular patient histories which <b>do not</b> follow best clinical practices. Some of the demonstration patients shown here have care histories designed to reflect these real-world problems.</li>
        <li>These are wireframe mockups and do not represent final versions of style, formatting or layout.</li>
      </ul>

    </div>
  )
}

function IndexRow(props) {
  const {index, rowData} = props;
  return (
    <tr>
      <td>{index}</td>
      <td><Link to={'/tests/'+rowData['key']}>{rowData['name']}</Link></td>
      <td>View</td>
      <td>{rowData['age']}</td>
      <td>{rowData['scenario']}</td>
      <td className="text-nowrap">{rowData['updated']}</td>
    </tr>
  )
}