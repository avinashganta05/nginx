const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Form App3");
}).listen(3003);

console.log("App3 running on port 3003");