const fs = require('fs');

const mimeTypes = {
    'css': 'text/css',
    'js': 'application/javascript',
    'jpg': 'image/jpg'
}

function staticHandler(req, res) {
    if (req.path.startsWith('/static/')) {
       
            const extention = req.path.split('.').pop();
            res.writeHead(200, {
                'Content-Type': mimeTypes[extention]
            });
            fs.readFile('.' + req.path, 'utf8', (err, data) => {
                res.write(data);
                res.end();
            });
        
    }else {
        return true;
    }
}

module.exports = staticHandler