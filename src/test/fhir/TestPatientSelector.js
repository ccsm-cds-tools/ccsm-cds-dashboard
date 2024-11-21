import logo from 'assets/ccsm-tulip.svg';
import '../basic/TestPatientSelector.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const screeningData = [
  {
    key: 'susan',
    name: 'Susan21 Holden65',
    age: '44',
    scenario: 'Average risk screening; patient has history.',
    updated: '11/21/2024'
  }
];
const screeningPad = 1;

const managementData = [
  {
    key: 'joanne',
    name: 'Joanne42 Smith657',
    age: '33',
    scenario: 'Management Table 4.',
    updated: '11/18/2024'
  }
];
const managementPad = screeningPad + screeningData.length;

const incompleteData = [
  {
    key: 'paulina',
    name: 'Paulina58 Vale56',
    age: '28',
    scenario: 'Average risk screening; patient has no history.',
    updated: '11/21/2024'
  },
  {
    key: 'lily',
    name: 'Lily23 Flowers68',
    age: '38',
    scenario: 'Post-biopsy; unstructured data in record.',
    updated: '11/21/2024'
  }
];
const incompletePad = managementPad + managementData.length;

export function TestPatientSelector() {
  return (
    <div>
      <div className="hero">
        <img src={logo} alt="Cervical Cancer CDS Tulip logo"/>
        <h1>CCSM-CDS</h1>
        <h2 className="subtitle">Cervical Cancer Screening and Management<br/>Clinical Decision Support</h2>
      </div>

      <h3>FHIR Test Patients</h3>
      <b>Author:</b> Michael O'Hanlon (<a href="mailto:mohanlon@mitre.org">mohanlon@mitre.org</a>)<br/>
      <b>Last Updated:</b> Nov 18, 2024<br/>

      <div className="sitemap">

        <Table className="index-table">

          <thead>
            <tr>
              <th><span className="visually-hidden">Sample Patient Number</span></th>
              <th>Sample Patient Name</th>
              <th>Age</th>
              <th>Type of Scenario</th>
              <th>Last Update</th>
            </tr>
          </thead>

          <tbody>
            <tr className="group">
              <td colSpan="6">Screening Scenarios</td>
            </tr>
            { screeningData.map((rd,idx) => <IndexRow key={idx} index={screeningPad+idx} rowData={rd} />) }
            
            <tr className="group">
              <td colSpan="6">Management Scenarios</td>
            </tr>
            { managementData.map((rd,idx) => <IndexRow key={idx} index={managementPad+idx} rowData={rd} />) }

            <tr className="group">
              <td colSpan="6">Missing/Incomplete Data Scenarios</td>
            </tr>
            { incompleteData.map((rd,idx) => <IndexRow key={idx} index={incompletePad+idx} rowData={rd} />) }

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
      <td><Link to={'/tests-fhir/'+rowData['key']}>{rowData['name']}</Link></td>
      <td>{rowData['age']}</td>
      <td>{rowData['scenario']}</td>
      <td className="text-nowrap">{rowData['updated']}</td>
    </tr>
  )
}

