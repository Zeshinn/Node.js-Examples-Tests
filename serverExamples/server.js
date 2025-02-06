const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.write("Hello Internet!");
        res.end();
    }else{
        res.write("Hello other Internet!");
        res.end();
    }
});

server.listen('3000');