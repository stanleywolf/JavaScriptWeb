
const handlerStatic = require('../handlers/static');
const handlerHome = require('../handlers/home');
const handlerError = require('../handlers/error');
const handlerAbout = require('../handlers/about');

module.exports =[
    handlerHome,   
    handlerAbout,
    handlerStatic,
    handlerError
];