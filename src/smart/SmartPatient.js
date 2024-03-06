import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

import Dashboard from 'features/Dashboard';
import { useCds } from 'hooks/useCds';
import { config } from './smart.config.js';

export function SmartPatient() {

  const [patientData, setPatientData] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const [isLoadingFHIRData, setIsLoadingFHIRData] = useState(false);
  const [toggleStatus, setToggleStatus] = useState({
    isImmunosuppressed: false,
    isPregnant: false,
    isPregnantConcerned: false,
    isSymptomatic: false,
    isToggleChanged: false
  });

  const { output: dashboardInput, isLoadingCdsData } = useCds(patientData, toggleStatus);
  const isLoading = isLoadingFHIRData || isLoadingCdsData;

  useEffect(() => {
    async function smartOnFhir() {
      console.time('Load FHIR Data');
      setIsLoadingFHIRData(true);
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

      let epTypeStr = process.env?.REACT_APP_CCSM_EPISODEOFCARE_TYPES ?? 'urn:oid:1.2.840.114350.1.13.284.2.7.2.726668|2';

      try {
        await client.request('/EpisodeOfCare?patient=' + pid + '&type=' + epTypeStr).then(async function(ec) {
          await fhirParser(ec);
        });
      } catch(e) {
        console.log(e);
      }

      console.timeEnd('Load FHIR Data');
      setPatientData(newData);
      setConvertedData(newFshData);
      setIsLoadingFHIRData(false);
    }
    smartOnFhir();
  },[]);

  if (process.env?.REACT_APP_DEBUG_FHIR==='true') {
    return (
      <div className="debug">
        <div key="recommendations">
          {
            <pre>
              {displayRecommendations(dashboardInput.decisionAids)}
            </pre>
          }
        </div>
        <hr />
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
      </div>
    )
  } else {
    return (
      <div className="content">
        <div className="dashboard-container">
          {isLoading && (
            <div className="overlay">
              <div className="spinner"></div>
            </div>
          )}
        <Dashboard
          input={dashboardInput}
          config={config}
          setPatientData={setPatientData}
          onToggleStatusChange={setToggleStatus}
        />
        </div>
      </div>
    )
  }

}

function displayRecommendations(decisionAids) {
  if (!decisionAids) {
    return 'Waiting for recommendations ...';
  }

  const {
    recommendation = '',
    recommendationGroup = '',
    recommendationDate = '',
    recommendationDetails = [],
    errors=[]
  } = decisionAids;

  let output = '';

  if (errors.length > 0) {
    output = `Cannot Make Recommendation.\n---\n${errors.join('\n')}`;
  } else {
    const formattedRecommendation = recommendation === '' ? 'No Recommendation' : recommendation;
    const formattedRecommendationDate = recommendationDate !== '' ? `Due: ${recommendationDate}` : '';

    output = `Recommendations: ${formattedRecommendation}\n${recommendationGroup}\n${formattedRecommendationDate}\n---\n${recommendationDetails.join('\n')}`;
  }

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