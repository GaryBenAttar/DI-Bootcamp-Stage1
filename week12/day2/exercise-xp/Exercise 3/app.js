const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes/books");

app.use(express.json());
app.use(routes);

app.listen(port, console.log(`Listening on port ${port}...`));
