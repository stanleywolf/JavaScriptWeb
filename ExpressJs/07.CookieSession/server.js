const express = require('express')
const app = express();

//const cookieParser = require('cookie-parser')
const session = require('express-session')

//app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// app.get('/setCookie',(req,res) =>{
//     res.cookie('message', 'hi');
//     res.end();
// });

app.get('/readCookie',(req,res) =>{
    res.json(req.cookies);
    res.end();
});

app.get('/setSession',(req,res) =>{
    req.session.message = 'hello'
    res.write('session set');
    res.end();
});
app.get('/getSession',(req,res) =>{
    res.json(req.session);
});

app.get('/',(req,res) =>{
    res.end(`It's working!!!`);
});
app.listen(5005);