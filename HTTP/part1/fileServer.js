const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.write('Home directory');
        res.end()
    }

    if(req.url === '/public'){
        res.write('This is public directory');
        res.end()
    }
    if(req.url === '/public/other'){
        res.write('This is public inside other')
        res.end()
    }


})

server.listen(8080);

console.log("listen port on 8080");