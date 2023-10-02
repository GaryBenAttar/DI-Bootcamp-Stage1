const fs = require("fs");
const triviaQuestions = require("./questions");

let tempTrivia = fs.readFileSync(`${__dirname}/template-trivia.html`, "utf-8");

const replaceTempTrivia = function (question) {
  tempTrivia = tempTrivia.replace(`{%QUESTION%}`, question);
  return tempTrivia;
};

const newQuestion = function () {
  const id = Math.trunc(Math.random() * triviaQuestions.length);
  const question = triviaQuestions.find((v) => v.id === id);

  return question.question;
};

const startQuizz = (req, res) => {
  res.send(tempTrivia);
};
