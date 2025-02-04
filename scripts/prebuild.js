// prebuild.js
const fs = require('fs');
const path = require('path');

const stridesPath = path.join(__dirname, '..', 'src', 'hooks', 'useCds', 'strides.js');
const valuesetPath = path.join(__dirname, '..', 'src', 'services', 'valuesets', 'valueset-db.js');

if (!fs.existsSync(stridesPath)) {
    fs.writeFileSync(stridesPath, 'export const stridesData = {};\n');
    console.log('Created a placeholder strides.js file');
} else {
    console.log('strides.js file exists');
}

if (!fs.existsSync(valuesetPath)) {
    fs.writeFileSync(valuesetPath, 'export const valueSetDb = {};\n');
    console.log('Created a placeholder valueset-db.js file');
} else {
    console.log('valueset-db.js file exists');
}