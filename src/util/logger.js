// Use a custom logger application
const LOGGER_HOST = process.env?.REACT_APP_LOGGER_HOST || "http://localhost"
const LOGGER_PORT = process.env?.REACT_APP_LOGGER_PORT || "4040";

export const LOGGER_URL = `${LOGGER_HOST}:${LOGGER_PORT}/log`;

export const LOGGER_ENABLED = process.env?.REACT_APP_LOGGER_ENABLED || false;

if (LOGGER_ENABLED) {console.log("Logging at", LOGGER_URL);}

export async function logMsg(msg) {
  console.time('Logged FHIR Data');
  try {
    const response = await fetch(LOGGER_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode:'cors',
      body: JSON.stringify(msg)
    }).then(response => {
      let cachedPostData = response.json();
      console.timeEnd('Logged FHIR Data');
    });
    return "success";
  } catch (e) {
    console.log("No response from log service")
    return "fail";
  }

}

