const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Form App2");
}).listen(3002);

console.log("App2 running on port 3002");