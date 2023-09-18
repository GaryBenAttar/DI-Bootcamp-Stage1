const express = require("express");
const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  const user = { firstname: "John", lastname: "Doe" };
  res.json(user);
});

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
