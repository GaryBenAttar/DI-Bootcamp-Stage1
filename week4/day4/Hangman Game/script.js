// Create A Hangman Game:
// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.
let hiddenWord = "";
let p1Word = "";
let p2Letter = "";

const p1WordHidden = function () {
  p1Word = prompt("Give a word that is at least 8 characters:");
  hiddenWord = "";
  for (i in p1Word) {
    hiddenWord = hiddenWord.concat("*");
  }
  console.log(hiddenWord);
};

const p2Guess = function () {
  p2Letter = prompt("Player 2, guess a letter:");
  let guessedLetter = "";
  for (i in p1Word) {
    if (p2Letter === p1Word[i]) {
      guessedLetter = hiddenWord.replace(p1Word[i], p2Letter);
    }
    console.log(guessedLetter);
  }
};

p1WordHidden();
p2Guess();
