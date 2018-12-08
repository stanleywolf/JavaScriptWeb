const express = require('express')
const app = express();
const handlebars = require('express-handlebars');

const port = 5002;

app.engine('.hbs',handlebars({
    extname:'.hbs',
    partialsDir:'views/partials/'
}));

app.set('view engine','.hbs')
//app.set('view engine','pug')
//app.set('views',__dirname + '/views');

app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('home',{
        title:'Ivan',
        sunny:true
    })
})
// use with pug
// app.get('/',(req,res) =>{
//     res.render('index',{
//         title:'Header 1',
//         subtitle:'Header 2',
//         isValid:true,
//         myArray :[1,2,3,4,5,6]
//     });
// })

app.listen(port,()=>{console.log('Running...')})