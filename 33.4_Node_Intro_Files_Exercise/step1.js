const fs = require('fs');
const process = require('process');

/* STEP 1 - READ .& PRINT .TXT FILE */
function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Error reading path: ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(`Contents of file ${path}: ${data}`)
        }
    });
}

cat(process.argv[2]);












