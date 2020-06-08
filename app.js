const fs = require('fs').promises;

const genders = ['M', 'F'];
const femaleNames = ['Dona', 'Reachel', 'Jessica', 'Kate', 'Norma'];
const maleNames = ['Mike', 'Harvey', 'Lois', 'Niko', 'Rob'];
const lastNames = ['Specter', 'Ross', 'Zane', 'Pearson', 'Litt'];

const randChoice = arr => {
    const arrIndex = Math.floor(Math.random() * arr.length);
    return arr[arrIndex];
};

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'F' ? randChoice(femaleNames) : randChoice(maleNames);
    const age = Math.floor(Math.random() * 60) + 18;
    const lastName = randChoice(lastNames);

    const person = {
        gender,
        firstName,
        lastName,
        age,
    };
    people.push(person);
};

fs
    .writeFile('people.json', JSON.stringify(people))
    .then(data => console.log('Success'))
    .catch(err => console.log('Error', err));