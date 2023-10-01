const triviaQuestions = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    id: 2,
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let id = 0;
let answer;
let userScore = 0;

const fs = require("fs");

const replaceTemplate = function (question) {
  const template = fs.readFile(`${__dirname}/template-trivia.html`);
  template.replace(/{%QUESTION%}/g, question);
  console.log(template);
};

const newQuestion = function () {
  let i = 0;
  triviaQuestions.splice(id, 1);
  triviaQuestions.forEach((v) => {
    v.id = i;
    i++;
  });

  id = Math.trunc(Math.random() * triviaQuestions.length);
  const question = triviaQuestions.filter((v) => v.id === id);

  return question.question;
};

const startQuizz = (req, res) => {
  res.writeHead({ "Content-type": "text/html" });
  id = Math.trunc(Math.random() * triviaQuestions.length);
  const result = triviaQuestions.filter((v) => v.id === id);

  res.status(200).send(replaceTemplate(result.question));
};

const answerQuestion = (req, res) => {
  answer = req.body.answer;

  if (answer === triviaQuestions[id].answer) {
    userScore++;
  }

  res.status(201).send(replaceTemplate(newQuestion()));
};

const getScore = (req, res) => {
  res.status(200).send(userScore);
};

module.exports = {
  startQuizz,
  answerQuestion,
};
