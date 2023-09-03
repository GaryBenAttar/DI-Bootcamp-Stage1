// Part I:

const main = require("./main.js");
const b = 5;

console.log(main.myNum + b);

// Part II:

const http = require("http");
const port = 3000;

const requestListener = function (req, res) {
  res.setHeader("Content-type", "text/html");
  res.writeHead(200);
  res.end(
    `<html><body><p>My module is ${
      main.myNum + b
    }</p><h1>Hi there ate the frontend!</h1></body><html/>`
  );
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log("I am listening on port " + port + "...");
});

// Part III:

const p3Port = 8080;

const p3RequestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<p>The date and time are currently: ${main.myDate}</p>`);
};

const p3Server = http.createServer(p3RequestListener);

p3Server.listen(p3Port, () => {
  console.log(`I am also listening on port ${p3Port}`);
});
