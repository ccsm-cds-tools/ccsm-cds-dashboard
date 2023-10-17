import { writeFileSync } from 'fs';
import { join } from 'path';
import csvToJson from 'convert-csv-to-json';

let keyColumn = 'MRN';
let groupedResults = {};
let csvFile = 'data/strides.csv';

if (process.argv.length === 3) {
  csvFile = process.argv[2];
}

const jsonFile = join('src/hooks/useCds/strides.js');
const results = csvToJson.fieldDelimiter(',').supportQuotedField(true).getJsonFromCsv(csvFile);
results.forEach(row => {
  let key = row[keyColumn]

  if (!groupedResults[key]) {
    groupedResults[key] = [];
  }

  groupedResults[key].push(row);
});

writeFileSync(jsonFile, 'export const stridesData = ' + JSON.stringify(groupedResults, null, 2));
