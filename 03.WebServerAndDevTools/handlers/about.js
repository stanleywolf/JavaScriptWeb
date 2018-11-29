
function aboutHandler(req,res) {
    if(req.path == '/about.html'){
        res.sendHtml('./views/about.html') 
    }else{
        return true;
    }
}
module.exports = aboutHandler;