import logo from 'assets/ccsm-tulip.svg';
import '../basic/TestPatientSelector.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { testData } from './testData';

// generates information packet for each patient bundle
function extractPatientInfo(keys, data) {
  const patientInfo = [];

  keys.forEach((key, i) => {
      if (data[key] && Array.isArray(data[key].entry)) {
          const patientEntry = data[key].entry.find(
              item => item.resource && item.resource.resourceType === "Patient"
          );

          if (patientEntry && patientEntry.resource) {
              const birthdate = patientEntry.resource.birthDate;
              const name = formatName(patientEntry.resource.name);
              const age = birthdate ? calculateAge(birthdate) : null;
              patientInfo.push({key, name, age, scenario: 'MGB Demo Patient #' + (i+1), updated: '11/1/2024'});
          }
      }
  });
  return patientInfo;
}

// converts humanName FHIR object to readable name
function formatName(nameArray) {
  if (!Array.isArray(nameArray) || nameArray.length === 0) return null;
  const nameObj = nameArray[0];
  const givenName = Array.isArray(nameObj.given) && nameObj.given.length > 0 ? nameObj.given[0] : '';
  const familyName = nameObj.family || '';
  return `${givenName} ${familyName}`;
}

// calculate age based on today's date (could fix the date so the patients don't get "older")
function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const mgbKeys = ['reese', 'olivia', 'meryl', 'natalie', 'anne', 'kate','scarlett', 'dua', 'angelina', 'julia', 'nicole', 'mila', 'jennifer'];
const mgbData = extractPatientInfo(mgbKeys, testData);
const screeningData = [
  {
    key: 'susan',
    name: 'Susan21 Holden65',
    age: '42',
    scenario: 'Average risk screening; patient has history.',
    updated: '7/20/2022'
  }
];
const screeningPad = 1;

const managementData = [
  {
    key: 'joanne',
    name: 'Joanne42 Smith657',
    age: '31',
    scenario: 'Management Table 4.',
    updated: '7/21/2022'
  }
];
const managementPad = screeningPad + screeningData.length;

const incompleteData = [
  {
    key: 'paulina',
    name: 'Paulina58 Vale56',
    age: '28',
    scenario: 'Average risk screening; patient has no history.',
    updated: '7/20/2022'
  },
  {
    key: 'lily',
    name: 'Lily23 Flowers68',
    age: '36',
    scenario: 'Post-biopsy; unstructured data in record.',
    updated: '7/20/2022'
  }
];

const incompletePad = managementPad + managementData.length;
const mgbPad = incompletePad + incompleteData.length;
export function TestPatientSelector() {
  return (
    <div>
      <div className="hero">
        <img src={logo} alt="Cervical Cancer CDS Tulip logo"/>
        <h1>CCSM-CDS</h1>
        <h2 className="subtitle">Cervical Cancer Screening and Management<br/>Clinical Decision Support</h2>
      </div>

      <h3>FHIR Test Patients</h3>
      <b>Author:</b> David Winters (<a href="mailto:dwinters@mitre.org">dwinters@mitre.org</a>)<br/>
      <b>Last Updated:</b> Jul 20, 2022<br/>

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
            <tr className="group">
              <td colSpan="6">MGB Test Scenarios</td>
            </tr>
            { mgbData.map((rd,idx) => <IndexRow key={idx} index={mgbPad+idx} rowData={rd} />) }
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

