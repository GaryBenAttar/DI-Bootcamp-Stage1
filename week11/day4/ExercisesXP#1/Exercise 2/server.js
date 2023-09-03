// Instructions

// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

const http = require("http");
const port = 8080;

const user = {
  firstname: "John",
  lastname: "Doe",
};

const requestListener = function (req, res) {
  res.setHeader("Contenet-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(user));
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log("I am listening...");
});
