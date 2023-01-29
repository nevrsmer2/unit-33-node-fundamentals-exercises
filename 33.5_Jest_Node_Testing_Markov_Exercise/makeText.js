/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

/** Create an instance of the MarkovMachine class and invoke makeText function. */
function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

/* Read contents of file and print it to the console*/
function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
        if (err) {
            console.error(`Cannot read file at path: ${path}. Error Message: ${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}

/* Request URL and prints HTML content to console. */
async function makeURLText(url) {
    let resp;

    try {
        resp = await axios.get(url);
    } catch (err) {
        console.error(`Cannot read URL: ${url}. Error: ${err}`);
        process.exit(1);
    }
    generateText(resp.data)
}

/* Determine CLI process.argv (file or url) value and run predetermined code. */
let [method, path] = process.argv.slice(2);

if (method === "file") {
    makeText(path);
}
else if (method === "url") {
    makeURLText(path);
}
else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}

