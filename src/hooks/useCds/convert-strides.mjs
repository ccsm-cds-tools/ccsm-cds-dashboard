import { writeFileSync } from 'fs';
import { join } from 'path';
import csvToJson from 'convert-csv-to-json';

let keyColumn = 'UNIVESRAL_PAT_ID';
let groupedResults = {};

const jsonFile = join('src/hooks/useCds/strides.js');
const results = csvToJson.fieldDelimiter(',').supportQuotedField(true).getJsonFromCsv('data/strides.csv');
results.forEach(row => {
  let key = row[keyColumn]

  if (!groupedResults[key]) {
    groupedResults[key] = [];
  }

  groupedResults[key].push(row);
});

writeFileSync(jsonFile, 'export const stridesDb = ' + JSON.stringify(groupedResults, null, 2));
