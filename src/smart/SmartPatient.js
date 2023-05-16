import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';

// import { config } from './smart.config.js';
// import { runGoFSH } from './FSHHelpers';

export function SmartPatient() {

  const [patientData, setPatientData] = useState([]);
  const dashboardInput = useCds(patientData);

  useEffect(() => {
    async function smartOnFhir() {
      let newData = [];
      let client = await FHIR.oauth2.ready();

      const fhirParser = await boundParser(newData);

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
    }
    smartOnFhir();
  },[]);

  if (process.env?.REACT_APP_DEBUG_FHIR==='true') {
    return (
      <div className="debug">
        {
          patientData.map((pd,idx) => {
            return(
              <div key={idx}>
                <pre>
                  {pd}
                </pre>
                <hr></hr>
              </div>
            )
          })
        }
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

function cleanFsh(fsh) {
  const fshString = typeof fsh === "string" ? fsh : fsh.fsh;
  return fshString.replaceAll('undefined', '\n').replaceAll(',', '\n');
}

async function boundParser(data) {
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
          data.push(cleanFsh(fsh));
        } else {
          data.push(c.resource);
        }
      }));
    } else if (Array.isArray(rsrc)) {
      await Promise.all(rsrc.map(async (c) => {
        if (!c.resourceType) return;
        console.log(c.resourceType);

        if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
          const fsh = await convert(c);
          data.push(cleanFsh(fsh));
        } else {
          data.push(c);
        }
      }));
    } else {
      if (!rsrc.resourceType) return;
      console.log(rsrc.resourceType);

      if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
        const fsh = await convert(rsrc);
        data.push(cleanFsh(fsh));
      } else {
        data.push(rsrc);
      }
    }
  };
}