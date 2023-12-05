import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import csvToJson from 'convert-csv-to-json';

let keyColumn = 'MRN';
let groupedResults = {};
let csvFile = '';

if (process.argv.length === 3) {
  csvFile = process.argv[2];
} else if (process.argv.length < 3) {
  console.info("Usage: npm run convert-csv [CSV file path]")
  process.exit(1);
}

if (!existsSync(csvFile)) {
  console.error("Error: File " + csvFile + " does not exist.")
  process.exit(1);
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

console.log("CSV file provided is coverted to JSON successfully.")
