// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const form = document.forms[0];
const inputs = form.getElementsByTagName("input");
form.addEventListener("submit", submit);

const noun = form.elements.noun;
const adj = form.elements.adjective;
const person = form.elements.person;
const verb = form.elements.verb;
const place = form.elements.place;
const story = document.getElementById("story");

function submit(e) {
  e.preventDefault();
  let i = 0;
  for (let input of inputs) {
    if (input.value == "") {
      console.log("Fill the blanks");
      i++;
    }
  }
  if (i == 0)
    story.textContent = `Once upon a time, ${person.value}, know for his greatest quality: ${noun.value} was extremely ${adj.value}, arrived in a place named ${place.value}. ${noun.value} was hired to ${verb.value} the most gorgeous girl who lived there.`;
}
