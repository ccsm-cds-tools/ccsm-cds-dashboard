// prebuild.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'hooks', 'useCds', 'strides.js');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'export const stridesData = {};\n');
    console.log('Created a placeholder strides.js file');
} else {
    console.log('strides.js file exists');
}
