// Part I:

const main = require("./main.js");
const b = 5;

console.log(main.myNum + b);

// Part II:

const http = require("http");
const requestListener = function (req, res) {
  res.writeHead(3000);
  res.end("My first server!");
};

const server = http.createServer(() => {
  console.log("I am listening...");
  res.setHeader("Content-Type", "text/html");
  res.end();
});

server.listen(3000);
