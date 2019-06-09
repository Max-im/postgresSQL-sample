const http = require("http");

const hostname = "localhost";

const port = 3000;

const server = http.createServer((req, res) => res.end("hello, world"));
server.listen(port, hostname, () => console.log("server run"));
