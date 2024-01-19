const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/UserApi/users.json`,"utf-8")
        const objectData = JSON.parse(data);

    if(req.url == '/'){
        res.writeHead(200,{'content-type': "text/html"} ); //,['Location' => 'index.html']
        res.end("<h1>hello , this is the home slide</h1>");
    }else if(req.url == "/about"){
        res.writeHead(200,{'content-type': "text/html"} );
        res.end("<h1>hello , this is from the about page</h1>");
    }else if(req.url == "/contact"){
        res.writeHead(200,{'content-type': "text/html"} );
        res.end("<h1>hello , this is from the contact page</h1>");
    }else if(req.url == "/userApi"){
            res.writeHead(200,{'content-type': "text/html"} );
            res.end(`<center><h1> ${objectData[0].firstName} </h1></center>`);
    }else{ 
        res.writeHead(404);
        res.end("<h1> 404 error pages<br> Page doesn't exist")
    }
    
});

const port = 8000
server.listen(port, "127.0.0.1",()=>{
    console.log(`server is running on the port ${port}`)
}); 