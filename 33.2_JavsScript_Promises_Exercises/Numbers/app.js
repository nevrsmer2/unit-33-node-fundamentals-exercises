// NUMBER 1

function fanNumFact() {
    let url = "http://numbersapi.com";
    let num = 50;
    let type = "date";

    let nunFact = axios.get(`${url}/${num}/${type}?json`);
    nunFact.then((res) => console.log(res.data.text));
    nunFact.catch((err) => console.log(err));
}

fanNumFact()


// NUMBER 2

let facts;
min = 1;
max = 5;

function getFacts() {
    let url = `http://numbersapi.com/${min}..${max}?json`;

    let numFacts = axios.get(url);
    numFacts.then((res) => {
        facts = res.data
        for (let fact in facts) {
            console.log(facts[fact])
        }
    });
    numFacts.catch((err) => console.log(err));
}

getFacts()


// Number 3

function getFourFacts() {
    let num = 5;
    let types = ['trivia', 'math', 'date', 'year'];

    let fourFacts = [];

    for (let type in types) {
        fourFacts.push(
            axios.get(`http://numbersapi.com/${num}/${types[type]}?json`)
        );
    }

    Promise.all(fourFacts)
        .then(factsText => (
            factsText.forEach(f => $("body").append(`<p>${f.data.text}</p>`))
        ))
        .catch(err => console.log(err));
}

getFourFacts()