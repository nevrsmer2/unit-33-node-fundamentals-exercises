const fs = require('fs');
const axios = require('axios')
const process = require('process')

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

// //STEP 2 - FETCH & PRINT WEBPAGE HTML CONTENT 
function webCat(url) {
    axios.get(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(`Error fetching URL: ${url}. Error Code: ${error.code}`);
            process.exit(1);
        })
}

/* Determine which argument to invoke based on arg input values */
let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}

