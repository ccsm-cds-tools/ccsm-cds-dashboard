import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';

// import { config } from './smart.config.js';
import { runGoFSH } from './FSHHelpers';

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

      await client.request('/Condition?patient=' + pid).then(async function(cd) {
        await fhirParser(cd);
      });

      let obsCatStr = process.env?.REACT_APP_CCSM_OBSERVATION_CATEGORIES ?? 'laboratory;obstetrics-gynecology;smartdata';
      let obsCatArr = obsCatStr.split(';');

      await Promise.all(obsCatArr.map(cat => {
        return client.request('/Observation?patient=' + pid + '&category=' + cat).then(async function(ob) {
          await fhirParser(ob);
        });
      }));

      await client.request('/Procedure?patient=' + pid).then(async function(pr) {
        await fhirParser(pr);
      });

      setPatientData(newData);
    }
    smartOnFhir();
  },[]);

  if (process.env?.REACT_APP_DEBUG_FHIR) {
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

  return async function parseFhir(rsrc) {

    const options = { dependencies: [], indent: true };

    if (rsrc) {
      if (rsrc.resourceType == 'Bundle' && rsrc.entry) {
        await Promise.all(rsrc.entry.map(async c => {
          if (c.resource) {
            console.log(c.resource.resourceType);
            if (process.env?.REACT_APP_DEBUG_FHIR) {
              await runGoFSH([JSON.stringify(c.resource)], options).then(({fsh,_config}) => {
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
            if (process.env?.REACT_APP_DEBUG_FHIR) {
              await runGoFSH([JSON.stringify(c)], options).then(({fsh,_config}) => {
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
        if (process.env?.REACT_APP_DEBUG_FHIR) {
          await runGoFSH([JSON.stringify(rsrc)], options).then(({fsh,_config}) => {
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