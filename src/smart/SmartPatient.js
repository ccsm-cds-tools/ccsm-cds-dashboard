import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';

import { config } from './smart.config.js';

export function SmartPatient() {

  const [patientData, setPatientData] = useState([]);
  const dashboardInput = useCds(patientData);

  useEffect(() => {
    async function smartOnFhir() {
      let newData = [];
      let client = await FHIR.oauth2.ready();

      let pid = await client.patient.read().then(function(pt) {
        if (pt) newData.unshift(pt);
        console.log(pt);
        return pt.id;
      });

      await client.request('/Condition?patient=' + pid).then(function(cd) {
        if (cd) {
          console.log(cd);
          if (cd.resourceType === 'Bundle' && cd.entry) {
            cd.entry.forEach(c => {
              if (c.resource) newData.push(c.resource);
            });
          } else if (Array.isArray(cd)) {
            cd.forEach(c => {
              if (c.resourceType) newData.push(c);
            });
          } else {
            newData.push(cd);
          }
        }
      });

      let obsCatStr = process.env?.REACT_APP_CCSM_OBSERVATION_CATEGORIES ?? 'laboratory;obstetrics-gynecology;smartdata';
      let obsCatArr = obsCatStr.split(';');

      await Promise.all(obsCatArr.map(cat => {
        return client.request('/Observation?patient=' + pid + '&category=' + cat).then(function(ob) {
          if (ob) {
            console.log(ob);
            if (ob.resourceType === 'Bundle' &&  ob.entry) {
              ob.entry.forEach(o => {
                if (o.resource) newData.push(o.resource);
              });
            } else if (Array.isArray(ob)) {
              ob.forEach(o => {
                if (o.resourceType) newData.push(o);
              });
            } else {
              newData.push(ob);
            }
          }
        });
      }));

      await client.request('/Procedure?patient=' + pid).then(function(dr) {
        if (dr) {
          console.log(dr);
          if (dr.resourceType === 'Bundle' &&  dr.entry) {
            dr.entry.forEach(d => {
              if (d.resource) newData.push(d.resource);
            });
          } else if (Array.isArray(dr)) {
            dr.forEach(d => {
              if (d.resourceType) newData.push(d);
            });
          } else {
            newData.push(dr);
          }
        }
      });

      setPatientData(newData);
    }
    smartOnFhir();
  },[]);

  if (process.env?.REACT_APP_DEBUG_FHIR) {

    return (
      <div className="debug">
        <pre>
          {JSON.stringify(patientData.filter(p => p?.resourceType !== 'OperationOutcome'), null, 2)}
        </pre>
      </div>
    )
  } else {
    return (
      <div className="content">
        <Dashboard
          input={dashboardInput}
          config={config}
          setPatientData={setPatientData}
        />
      </div>
    )
  }

}