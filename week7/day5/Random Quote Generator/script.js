// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

let quotes = [
  {
    id: 0,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    likes: 0,
  },
  {
    id: 1,
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wild",
    likes: 0,
  },
  {
    id: 2,
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
    likes: 0,
  },
  {
    id: 3,
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author: "Marilyn Monroe",
    likes: 0,
  },
  {
    id: 4,
    quote:
      "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    author: "Maurice Switzer",
    likes: 0,
  },
];

// Part I:

const quoteSection = document.getElementById("quote");
const authorSection = document.getElementById("author");
const quoteBtn = document.querySelector(".generate__quote");

let randomId = Math.trunc(Math.random() * quotes.length);
let idTracker = {};

quoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  idTracker = quotes[randomId];

  do {
    randomId = Math.trunc(Math.random() * quotes.length);
  } while (idTracker.id === quotes[randomId].id);
  idTracker = quotes[randomId];
  quoteSection.textContent = `${quotes[randomId].quote}`;
  authorSection.textContent = `${quotes[randomId].author}`;
}

// Part II:

const form = document.forms[0];
const newQuote = form.elements.new__quote;
const newAuthor = form.elements.new__author;

form.addEventListener("submit", addNewQuote);

function addNewQuote(e) {
  e.preventDefault();
  quotes.push({
    id: quotes.length,
    quote: newQuote.value,
    author: newAuthor.value,
    likes: 0,
  });
}

const charSpacesBtn = document.querySelector(".numChar1");
const charsBtn = document.querySelector(".numChar2");
const wordsBtn = document.querySelector(".numWord");
const likeBtn = document.querySelector(".likeBtn");

charSpacesBtn.addEventListener("click", charSpacesCount);

function charSpacesCount() {
  console.log(quoteSection.textContent.length);
}

charsBtn.addEventListener("click", charsCount);

function charsCount() {
  let quoteWithoutSpaces = quoteSection.textContent;

  do {
    quoteWithoutSpaces = quoteWithoutSpaces.replace(" ", "");
  } while (quoteWithoutSpaces.includes(" "));

  console.log(quoteWithoutSpaces.length);
}

wordsBtn.addEventListener("click", wordsCount);

function wordsCount() {
  const quoteWords = quoteSection.textContent.split(" ");
  console.log(quoteWords.length);
}

likeBtn.addEventListener("click", addLike);

function addLike() {
  quotes[idTracker.id].likes++;
  console.log(quotes);
}
