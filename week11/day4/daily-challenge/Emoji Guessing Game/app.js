const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const tempGame = fs.readFileSync(`${__dirname}/template-game.html`, "utf-8");

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
app.use(express.static("public"));
app.use(express.json());

const replaceTemplate = function (temp, obj) {
  const randNum1 = Math.trunc(Math.random() * dataObj.length);
  let randNum2;

  do {
    randNum2 = Math.trunc(Math.random() * dataObj.length);
  } while (randNum2 === randNum1);

  let randNum3;

  do {
    randNum3 = Math.trunc(Math.random() * dataObj.length);
  } while (randNum3 === randNum1 || randNum3 === randNum2);

  let output = temp.replace(/{%EMOJI%}/g, dataObj[randNum1].emoji);
  output = output.replace(/{%NAME-1%}/g, dataObj[randNum1].name);
  output = output.replace(/{%NAME-2%}/g, dataObj[randNum2].name);
  output = output.replace(/{%NAME-3%}/g, dataObj[randNum3].name);

  return output;
};

app.get("/emojis", (req, res) => {
  const dataHtml = replaceTemplate(tempGame, dataObj);
  res.send(dataHtml);
});

let choice;

app.post("/emojis", (req, res) => {
  choice = req.body.choice;
  res.status(201);
  console.log(choice);
});
