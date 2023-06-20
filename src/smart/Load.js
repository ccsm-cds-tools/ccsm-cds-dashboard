// Modified from: https://github.com/FSHSchool/FSHOnline
// Copyright 2019 Health Level Seven International
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
import { utils } from 'fsh-sushi';
import pako from 'pako';
import { untar } from './untar.js';

const logger = utils.logger;

export function unzipDependencies(resources, dependency, id) {
  logger.info('unzipping dependencies')
  let returnPackage = { resourceArr: resources, emptyDependencies: [] };
  return new Promise(function(resolve) {

        console.log(`https://packages.fhir.org/${dependency}/${id}`);

        fetch(`https://packages.fhir.org/${dependency}/${id}`)
          .then(res => res.arrayBuffer())
          .then(pako.inflate)
          .then(arr => arr.buffer)
          .then(function(arr) {
            const decoder = new TextDecoder();
            const decoded = decoder.decode(arr);
            const temp = untar(decoded);
            temp.forEach(t => returnPackage.resourceArr.push(t));
            resolve(returnPackage);
          });

  });
}

export function loadDependenciesInStorage(database, resources, dependency, id) {
  return new Promise((resolve, reject) => {
    // Loads parsed json into indexDB
    const transaction = database.transaction([`${dependency}${id}`], 'readwrite');
    transaction.oncomplete = () => {
      resolve();
    };
    transaction.onerror = (event) => {
      reject(event);
    };
    const objectStore = transaction.objectStore(`${dependency}${id}`, { keyPath: ['id', 'resourceType'] });
    resources.forEach((res) => {
      if (res.id && res.resourceType) {
        objectStore.put(res);
      }
    });
  });
}

export function loadAsFHIRDefs(FHIRdefs, database, dependency, id) {
  // Convert database data into FHIR Definitions
  return new Promise((resolve, reject) => {
    let displayLoaded = false;
    const getData = database
      .transaction([`${dependency}${id}`], 'readonly')
      .objectStore(`${dependency}${id}`, { keyPath: ['id', 'resourceType'] })
      .openCursor();
    getData.onerror = function () {
      reject('There is an error getting data out!');
    };
    getData.onsuccess = function () {
      const iterator = getData.result;
      if (iterator) {
        displayLoaded = true;
        FHIRdefs.add(iterator.value);
        iterator.continue();
      } else {
        if (displayLoaded) {
          logger.info(`Loaded package ${dependency}#${id}`);
        }
        resolve(FHIRdefs);
      }
    };
  });
}
