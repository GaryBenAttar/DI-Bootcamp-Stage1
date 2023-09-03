// Instructions

// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require("http");
const port = 3000;

const responseListener = function (req, res) {
  res.setHeader("Content-type", "text/html");
  res.end(
    "<html><body><h1>A first element that is a header 1</h1><br><p>A second one that is a paragraph</p><br><button>A Button</button></body></html>"
  );
};

const server = http.createServer(responseListener);

server.listen(port, () => {
  console.log("I am listenning...");
});
