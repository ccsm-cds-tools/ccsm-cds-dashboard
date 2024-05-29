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

      const promises = [];

      promises.push(client.request(`/Condition?patient=${pid}&category=encounter-diagnosis,problem-list-item,medical-history&_include=Condition:encounter:Encounter`).then(fhirParser)); // include Encounters referenced by Conditions to avoid a separate API search
      promises.push(client.request(`/DiagnosticReport?patient=${pid}&category=http://terminology.hl7.org/CodeSystem/v2-0074|Lab`).then(fhirParser));
      promises.push(client.request(`/Immunization?patient=${pid}&status=completed&vaccine-code=118,137,165,62`).then(fhirParser));
      promises.push(client.request(`/MedicationRequest?patient=${pid}&status=completed`).then(fhirParser));
      promises.push(client.request(`/Procedure?patient=${pid}&status=completed&category=http://snomed.info/sct|103693007,http://snomed.info/sct|387713003`).then(fhirParser)); // Search Procedures with category of Diagnostic procedure or Surgical procedure

      const eocType = process.env?.REACT_APP_CCSM_EPISODEOFCARE_TYPES ?? 'urn:id:1.2.840.114350.1.13.284.2.7.2.726668|2'; // Search Episodes of Care with type of Pregnancy
      promises.push(client.request(`/EpisodeOfCare?patient=${pid}&type=${eocType}`).then(fhirParser));
      promises.push(client.request(`/EpisodeOfCare?patient=${pid}&type=urn:oid:1.2.840.114350.1.13.284.3.7.2.726668|2`).then(fhirParser));
      promises.push(client.request(`/Observation?patient=${pid}&status=final,corrected,amended&category=laboratory,obstetrics-gynecology`).then(fhirParser));
      promises.push(client.request(`/Observation?patient=${pid}&status=final,corrected,amended&category=social-history&code=http://loinc.org|82810-3`).then(fhirParser)); // Search Observations with code of Pregnancy status

      try {
        await Promise.allSettled(promises);
      } catch (e) {
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
      <p className="alert alert-danger">The CDC/MITRE Cervical Cancer CDS Dashboard is under pilot evaluation and is <b>not for use in clinical practice.</b></p>
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