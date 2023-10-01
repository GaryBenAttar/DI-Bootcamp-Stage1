const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes/index.js");

app.listen(port, console.log(`Listening on port: ${port} ...`));

app.use(express.json());
app.use(routes);
