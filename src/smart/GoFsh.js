// Source: https://github.com/FSHSchool/FSHOnline
// Copyright 2019 Health Level Seven International
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
import { gofshExport, processor, utils as gofshUtils } from 'gofsh';
import { fhirdefs } from 'fsh-sushi';

const FHIRDefinitions = fhirdefs.FHIRDefinitions;

export async function runGoFSH(input, options) {

  // Read in the resources as strings
  const docs = [];
  input.forEach((resource, i) => {
    const location = `Input_${i}`;
    try {
      resource = JSON.parse(resource);
    } catch (e) {
      console.log(`Could not parse ${location} to JSON`);
      return;
    }
    if (gofshUtils.isProcessableContent(resource, location)) {
      docs.push(new processor.WildFHIR({ content: resource }, location));
    }
  });

  // Set up the FHIRProcessor
  const lake = new processor.LakeOfFHIR(docs);
  let defs = new FHIRDefinitions();
  const fisher = new gofshUtils.MasterFisher(lake, defs);
  const fhirProcessor = new processor.FHIRProcessor(lake, fisher);

  // Process the configuration
  const configuration = fhirProcessor.processConfig(options.dependencies ?? []);

  // Load dependencies, including those inferred from an IG file, and those given as input
  // let dependencies = configuration?.config.dependencies
  //   ? configuration?.config.dependencies.map((dep) => `${dep.packageId}#${dep.version}`)
  //   : [];
  // dependencies = sliceDependency(dependencies.join(','));
  // defs = await loadAndCleanDatabase(defs, dependencies);

  // Process the FHIR to rules, and then export to FSH
  const pkg = await gofshUtils.getResources(fhirProcessor, configuration, { indent: options.indent });

  // Return the string of FSH definitions
  const fsh = new gofshExport.FSHExporter(pkg).apiExport('string');
  console.log('Done converting definitions');
  return { fsh, config: configuration?.config ?? {} };
}