import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';

// import { config } from './smart.config.js';
// import { runGoFSH } from './FSHHelpers';

export function SmartPatient() {

  const [patientData, setPatientData] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const dashboardInput = useCds(patientData);
  //const convert = convert(resource);

  useEffect(() => {
    async function smartOnFhir() {
      let newData = [];
      let newFshData = [];
      let client = await FHIR.oauth2.ready();

      const fhirParser = await boundParser(newData, newFshData);

      let pid = await client.patient.read().then(async function(pt) {
        await fhirParser(pt);
        return pt.id;
      });

      try {
        await client.request('/Condition?patient=' + pid).then(async function(cd) {
          await fhirParser(cd);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/DiagnosticReport?patient=' + pid).then(async function(dr) {
          await fhirParser(dr);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/DocumentReference?patient=' + pid).then(async function(dr) {
          await fhirParser(dr);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/Encounter?patient=' + pid).then(async function(en) {
          await fhirParser(en);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/Immunization?patient=' + pid).then(async function(dr) {
          await fhirParser(dr);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/MedicationRequest?patient=' + pid).then(async function(mr) {
          await fhirParser(mr);
        });
      } catch(e) {
        console.log(e);
      }

      let obsCatStr = process.env?.REACT_APP_CCSM_OBSERVATION_CATEGORIES ?? 'laboratory;obstetrics-gynecology;smartdata';
      let obsCatArr = obsCatStr.split(';');

      try {
        await Promise.all(obsCatArr.map(cat => {
          return client.request('/Observation?patient=' + pid + '&category=' + cat).then(async function(ob) {
            await fhirParser(ob);
          });
        }));
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/Procedure?patient=' + pid).then(async function(pr) {
          await fhirParser(pr);
        });
      } catch(e) {
        console.log(e);
      }

      try {
        await client.request('/QuestionnaireResponse?patient=' + pid).then(async function(qr) {
          await fhirParser(qr);
        });
      } catch(e) {
        console.log(e);
      }

      setPatientData(newData);
      setConvertedData(newFshData);
    }
    smartOnFhir();
  },[]);

  if (process.env?.REACT_APP_DEBUG_FHIR==='true') {
    return (
      <div className="debug">
        <div key="patientData">
          {
            convertedData.map((converted, idx) => (
              <div key={idx}>
                <pre>{converted}</pre>
                <hr />
              </div>
            ))
          }
        </div>

        <div key="recommendation">
          {
            <pre>
              {displayRecommendations(dashboardInput.decisionAids)}
            </pre>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="content">
        <Dashboard
          input={dashboardInput}
          config={{}}
          setPatientData={setPatientData}
        />
      </div>
    )
  }

}

function displayRecommendations(decisionAids) {
  if (!decisionAids) {
    return 'No Recommendation';
  }

  const {
    recommendation,
    recommendationGroup,
    recommendationDate,
    recommendationDetails,
  } = decisionAids;

  const output = `Recommendations: ${recommendation}\n${recommendationGroup}\nDue: ${recommendationDate}\n${recommendationDetails.join('\n')}`;

  return output;
}

function cleanFsh(fsh) {
  const fshString = typeof fsh === "string" ? fsh : fsh.fsh;
  return fshString.replaceAll('undefined', '\n').replaceAll(',', '\n');
}

async function boundParser(data, fshData) {
  const options = { dependencies: [], indent: true };

  let convert = (c) => Promise.resolve(c);

  if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
    const module = await import('./FSHHelpers');
    convert = (c) => module.runGoFSH([JSON.stringify(c)], options);
  }

  return async function parseFhir(rsrc) {
    if (!rsrc) return;

    if (rsrc.resourceType === 'Bundle' && rsrc.entry) {
      await Promise.all(rsrc.entry.map(async (c) => {
        if (!c.resource) return;
        console.log(c.resource.resourceType);

        if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
          const fsh = await convert(c.resource);
          fshData.push(cleanFsh(fsh));
        }

        data.push(c.resource);

      }));
    } else if (Array.isArray(rsrc)) {
      await Promise.all(rsrc.map(async (c) => {
        if (!c.resourceType) return;
        console.log(c.resourceType);

        if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
          const fsh = await convert(c);
          fshData.push(cleanFsh(fsh));
        }

        data.push(c);
      }));
    } else {
      if (!rsrc.resourceType) return;
      console.log(rsrc.resourceType);

      if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
        const fsh = await convert(rsrc);
        fshData.push(cleanFsh(fsh));
      }

      data.push(rsrc);
    }
  };
}