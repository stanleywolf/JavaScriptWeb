const http = require('http');
const fs = require('fs');
const url = require('url');
const handlers = require('../handlers/index');
const port = 5000;

const server = http.createServer(frontController);
/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ClientResponse} res 
 */
function frontController(req,res) {
    req.path = url.parse(req.url).pathname;
    res.sendHtml = (path) =>{
        fs.readFile(path,'utf8',(err,data) =>{                    
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.write(data)
            res.end();   
        });
    }

    if(req.method == 'GET'){
        for (const handler of handlers) {
            if(handler(req,res) !== true){
                break;
            }
        }

        //with stream req.on
    }else if(req.method == 'POST'){
        let body = '';
        req.on('data', data =>{
            body += data;
        })
        req.on('end', ()=>{
            console.log(body);
            res.end();
        })
    }
    
}

server.listen(port)
console.log(`Listening on port ${port}`);