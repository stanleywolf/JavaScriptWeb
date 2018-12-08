
function errorHandler(req,res) {
    res.sendHtml('./views/error.html')    
     return;         
}


module.exports = errorHandler;