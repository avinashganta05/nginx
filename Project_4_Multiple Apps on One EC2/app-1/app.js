const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Form App1");
}).listen(3001);

console.log("App1 running on port 3001");