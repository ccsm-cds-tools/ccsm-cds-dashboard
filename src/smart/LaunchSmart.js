import { useEffect, useState } from 'react';
import FHIR from 'fhirclient';

export function LaunchSmart() {


  useEffect(() => {
    FHIR.oauth2.authorize({
      clientId: 'my-client-id',
      scope: 'launch launch/patient patient/read offline_access',
      redirectUri: './',
      iss: 'https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEifQ/fhir',
      completeInTarget: true
    });
  },[]);

  return (
    <div className="content">
    </div>
  )
  
}