const fetch = require('node-fetch');

class Furminator {
    constructor() {
        this.url = "https://cat-fact.herokuapp.com/facts/random";
        this._factCount = null;
    }

    getFact() {
        return fetch(this.url)
        .then(res => {
            return res.json();
        })
        .then(body => {
            return body;
        });
    }

    set factCount(numberOfFacts)
    {
        this._factCount = `${numberOfFacts} Facts`;
    }
}


// const generateMessage = () => {
//     const url = 'https://cat-fact.herokuapp.com/facts/random';

//     return fetch(url)
//         .then(res => res.json())
//         .then(body => body)
// }

module.exports = Furminator;