const http = require('http');



const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
    console.log(url+" "+method)
    if(url === "/service" && method ==="GET"){
        res.write("<h1>Services</h1>");
        res.write("<form method='post'><input type='text' name='txtMessage'/><button type='submit'>send</button></form>")
        return res.end();
    }
    if(url === "/service" && method ==="POST"){
        //console.log("Services post");
        let userMessage = [];
        req.on('data',(myData)=>{
            userMessage.push(myData);
        })
        req.on('end',()=>{
            const parsedData = Buffer.concat(userMessage).toString();
            console.log(parsedData);
        })
        res.write("<h1>Services posted</h1>");
        return res.end();
    }
    if(url === "/about"){
        res.write("<h1>About</h1>");
        return res.end();
    }
    if(url === "/"){
        res.write("<h1>Home</h1>");
        return res.end();
    }
    res.write("<h1>No such page......!!!</h1>");
    res.end();
});

server.listen(2100);
console.log("server started");