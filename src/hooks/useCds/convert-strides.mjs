import { writeFileSync } from 'fs';
import { join } from 'path';
import csvToJson from 'convert-csv-to-json';


const jsonFile = join('src/hooks/useCds/strides.js');
const results = csvToJson.fieldDelimiter(',').supportQuotedField(true).getJsonFromCsv('data/strides.csv');
writeFileSync(jsonFile, 'export const stridesDb = ' + JSON.stringify(results, null, 2));
