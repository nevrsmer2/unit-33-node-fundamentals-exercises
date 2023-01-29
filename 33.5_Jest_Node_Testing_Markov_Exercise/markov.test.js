const markov = require("./markov");

describe('Testing Markov Class Initialization', () => {

    let testInstance = new markov.MarkovMachine("Hello there");

    test('Test if instance is an object', () => {
        expect(typeof testInstance).toBe('object');
    })

    test("Test if words array property length corresponds to instance input", () => {
        expect(testInstance.words.length).toBe(2);
    })
    test("Test if words array contains the string 'Hello'", () => {
        expect(testInstance.words).toContain("Hello");
    })

    test('Test if chains is an object type', () => {
        expect(typeof testInstance.chains).toBe('object');
    })
});