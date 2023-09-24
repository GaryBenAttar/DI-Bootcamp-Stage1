const express = require("express");
const app = express();
const port = 5000;

const dataService = require("./data/dataService");

app.listen(port, () => console.log(`Listening on port: ${port}...`));

app.get("/posts", (req, res) => {
  res.json(dataService.fetchPosts());
  console.log("Data succesfully retrived");
});
