const fs = require('fs');

const text = fs.readFile('./data.json','utf8',(err,text) =>{
    const data = JSON.parse(text);

    console.log(data[0].name);

    data[0].name = 'Nikola';

    fs.writeFile('./data.json',JSON.stringify(data), (err) =>{
        console.log('Complete!!!');
    });
});
console.log('start.js finished!!!');