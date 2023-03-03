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

      const fhirParser = boundParser(newData);
      
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

function boundParser(data) {

  const options = { dependencies: [], indent: true };
  let convert = (c) => { return new Promise(c); };
  if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
    import('./FSHHelpers').then(module => {
      convert = c => module.runGoFSH([JSON.stringify(c)],options);
    });
  }

  return async function parseFhir(rsrc) {

    if (rsrc) {
      if (rsrc.resourceType === 'Bundle' && rsrc.entry) {
        await Promise.all(rsrc.entry.map(async c => {
          if (c.resource) {
            console.log(c.resource.resourceType);
            if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
              await convert(c.resource).then(({fsh,_config}) => {
                const cleanedFsh = fsh.replaceAll('undefined',',').replaceAll(',','\n');
                data.push(cleanedFsh);
              });
            } else {
              data.push(c.resource);
            }
          }
        }));
      } else if (Array.isArray(rsrc)) {
        await Promise.all(rsrc.map(async c => {
          if (c.resourceType) {
            console.log(c.resourceType);
            if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
              await convert(c).then(({fsh,_config}) => {
                const cleanedFsh = fsh.replaceAll('undefined',',').replaceAll(',','\n');
                data.push(cleanedFsh);
              });
            } else {
              data.push(c);
            }
          }
        }));
      } else {
        console.log(rsrc.resourceType);
        if (process.env?.REACT_APP_DEBUG_FHIR === 'true') {
          await convert(rsrc).then(({fsh,_config}) => {
            const cleanedFsh = fsh.replaceAll('undefined',',').replaceAll(',','\n');
            data.push(cleanedFsh);
          });
        } else {
          data.push(rsrc);
        }
      }
    }
  }
}