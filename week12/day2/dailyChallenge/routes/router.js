const express = require("express");
const router = express.Router();

const { startQuizz, answerQuestion } = require("../Collections/data");

router.get("/quizz", startQuizz);
router.post("/quizz", answerQuestion);

module.exports = router;
