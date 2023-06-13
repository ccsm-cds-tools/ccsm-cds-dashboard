import { useEffect } from 'react';
import FHIR from 'fhirclient';

export function LaunchSmart() {

  useEffect(function() {
    FHIR.oauth2.authorize({
      clientId: process.env?.REACT_APP_CLIENT_ID ?? '12345',
      scope: process.env?.REACT_APP_SMART_SCOPE ?? 'launch patient/*.read',
      redirectUri: process.env?.REACT_APP_REDIRECT_URI ?? 'https://localhost:3000',
      completeInTarget: true
    });
  },[]);

  return (
    <div className="content">
    </div>
  )

}