// // NUMBER 1n - Async & Await

async function funNumFact() {

    let url = "http://numbersapi.com";
    let num = 50;
    let type = "date";

    try {
        let res = await axios.get(`${url}/${num}/${type}?json`);
        console.log(res.data.text);
    }
    catch (e) {
        console.log(`There are no facts for number ${num}.`)
    }
}

funNumFact()


// // NUMBER 2 - Async & Await

let facts;
min = 1;
max = 5;

async function getFacts() {
    let url = `http://numbersapi.com/${min}..${max}?json`;

    try {
        let res = await axios.get(url);
        facts = res.data
        for (let fact in facts) {
            console.log(facts[fact])
        }
    }
    catch (e) {
        console.log(`No matches for numbers ${min} or ${max}`)
    }
}

getFacts()


// // NUMBER 3 - Async & Await

async function getFourFacts() {
    let num = 5;
    let types = ['trivia', 'math', 'date', 'year'];
    let facts = [];

    try {
        for (let type in types) {
            facts.push(
                await axios.get(`http://numbersapi.com/${num}/${types[type]}?json`)
            );
        }
    }
    catch (e) {
        console.log(`There are no facts for number ${num}`)
    }

    for (let fact in facts) {
        $("body").append(`<p>${facts[fact].data.text}</p>`)
    }
}
getFourFacts()



