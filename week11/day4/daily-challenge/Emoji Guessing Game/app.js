const fs = require("fs");
const bodyParser = require("body-parser");

const emojis = fs.readFileSync(`${__dirname}/emojis.json`, "utf-8");
const emojisObj = JSON.parse(emojis);

const users = fs.readFileSync(`${__dirname}/leaderboard.json`, "utf-8");
let usersObj = JSON.parse(users);

const tempGame = fs.readFileSync(`${__dirname}/template-game.html`, "utf-8");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port: ${port}`));

let randNum1;
let randNum2;
let randNum3;

let player = "";
let result = "";
let userScore = 0;
let userHighestScore = 0;

const replaceTempGame = function (temp, user) {
  // Generate random emoji and answer options

  randNum1 = Math.trunc(Math.random() * emojisObj.length);

  do {
    randNum2 = Math.trunc(Math.random() * emojisObj.length);
  } while (randNum2 === randNum1);

  do {
    randNum3 = Math.trunc(Math.random() * emojisObj.length);
  } while (randNum3 === randNum1 || randNum3 === randNum2);

  // Displaying the emoji and answers in the HTML

  const highScore = `${user}'s highest score = ${userHighestScore}`;

  let output = temp.replace(/{%EMOJI%}/g, emojisObj[randNum1].emoji);
  output = output.replace(/{%NAME-1%}/g, emojisObj[randNum1].name);
  output = output.replace(/{%NAME-2%}/g, emojisObj[randNum2].name);
  output = output.replace(/{%NAME-3%}/g, emojisObj[randNum3].name);
  output = output.replace(/{%RESULT%}/g, result);
  output = output.replace(/{%HIGHEST_SCORE%}/g, highScore);

  return output;
};

// Start game

app.get("/emojis", (req, res) => {
  const emojisHtml = replaceTempGame(tempGame, emojisObj);
  res.send(emojisHtml);
});

// Submit answer

app.post("/emojis", (req, res) => {
  const choice = req.body.choice;
  if (req.body.user && req.body.user !== player) {
    player = req.body.user;
    userScore = 0;
  }

  let playerObj = usersObj.find((v) => v.username === player);

  if (playerObj) {
    userHighestScore = playerObj.score;
    console.log(usersObj);
  } else {
    playerObj = {
      username: player,
      score: 0,
    };
    usersObj.push(playerObj);
    console.log(usersObj);
    userHighestScore = playerObj.score;
  }

  if (choice === emojisObj[randNum1].name) {
    userScore++;

    if (userScore > userHighestScore) {
      userHighestScore = userScore;
      playerObj.score = userHighestScore;
      console.log(usersObj);
    }

    result = `You guessed correctly! Score: ${userScore}`;
  } else {
    userScore = 0;
    result = `Wrong guess... Score: ${userScore}`;
  }

  fs.writeFileSync(`${__dirname}/leaderboard.json`, JSON.stringify(usersObj));
  const emojisHtml = replaceTempGame(tempGame, player);
  res.status(201).send(emojisHtml);
});

// Leaderboard

const card = fs.readFileSync(`${__dirname}/template-usercard.html`, "utf-8");

const replaceTempUsercard = function (temp, obj) {
  let output = card.replace("{%USERNAME%}", obj.username);
  output = output.replace("{%SCORE%}", obj.score);

  return output;
};

const tempLeaderboard = fs.readFileSync(
  `${__dirname}/template-leaderboard.html`,
  "utf-8"
);

const replaceTempLeaderboard = function (temp) {
  let sortedUsers = usersObj.sort((a, b) => b.score - a.score);

  const cards = sortedUsers.map((v) => replaceTempUsercard(card, v));
  console.log(cards);

  let output = temp.replace(/{%USER_CARD%}/g, cards);
  return output;
};

app.get("/leaderboard", (req, res) => {
  res.send(replaceTempLeaderboard(tempLeaderboard));
});
