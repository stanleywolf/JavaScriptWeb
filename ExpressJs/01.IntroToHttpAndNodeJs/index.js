const Person = require('./Person.js');
const api = require('./api');
const fs = require('fs');


var person = new Person("Stancho",36);

//console.log(person.age)

api.update(0,person);
api.update(1,new Person('Yoan',3));

console.log(api.getAll());

//setTimeout( () => console.log('first'),1000);
//console.log('second');

fs.writeFileSync('./data.json',JSON.stringify(api.getAll()));
const text = fs.readFileSync('./package.json','utf8');
const data = JSON.parse(text);

console.log(data.name);

data.name = 'liverpool';
fs.writeFileSync('./package.json',JSON.stringify(data));