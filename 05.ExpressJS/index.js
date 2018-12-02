let express = require('express');

let app = express();
const port = 5001;

//auth in routing
let authentication = (req, res, next) => {
    if (!user.isAuthenticated()) {
        res.redirect('/login')
    } else {
        next();
    };
};

app.get('/home', (req, res) => {
    res.send('Hello from express!');
})

app.get('/about', (req, res) => {
    res.send('About page!');
})

app.get('/courses/:id/:title/:date', (req, res) => {

    let params = req.params;
    console.log(params)
    console.log(params.id)
    console.log(params.title)
    console.log(params.date)

    res.send(params.id);
})
//validate parameter: TODO:app.get('/courses/:date(//d+)
app.get('/courses/details/:date/:name/:font', (req, res) => {

    let params = req.params;
    res.send(params);
})
//app.get('*')  match all url's
//match all methods
app.all('/authpage', authentication, (req, res, next) => {
    //some code
    next()
}, (req, res) => {
    res.send('Sorry page not found!');
})

//chain routes
app.route('/index')
    .get((req, res) => {
        //download file
        res.download('./index.js');
        // close response res.end()
    })
    .post((req, res) => {

    })

let obj = { name: 'Ivan', age: 25 };

//return JSON
app.get('/json', (req, res) => {
    res.json(JSON.stringify(obj));
})

//return file to browser
app.get('/send', (req, res) => {
    res.sendFile(__dirname + '/index.js');
})

//new route
let router = express.Router();

router.get('/create',(req,res) =>{
    res.send('Create cat!!!')
})

// /create - go to /cats/create
app.use('/cats', router);

app.listen(port, () => console.log('Running....'))