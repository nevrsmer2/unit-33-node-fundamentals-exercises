const fs = require('fs');
const axios = require('axios')
const process = require('process')

/* Handle output to file functionality (in cat() and webCat()) */
function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function (err) {
            if (err) {
                console.error(`Unable to write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
}

/* STEP 1 (cat()) + added functionality to output  file contents to new file */
function cat(path, out) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Error reading path: ${path}: ${err}`);
            process.exit(1);
        } else {
            handleOutput(data, out);
        }
    });
}


/* STEP 2 (webCat()) + added functionality to output  webpage content to a file */
function webCat(url, out) {
    axios.get(url)
        .then(res => {
            handleOutput(res.data, out);
        })
        .catch(error => {
            console.log(`Error fetching URL: ${url}. Error Code: ${error.code}`);
            process.exit(1);
        })
}

/* Code to manage process.argv flags*/
let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

/* Determine which argument to invoke based on arg input values */
if (path.slice(0, 4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out);
}

