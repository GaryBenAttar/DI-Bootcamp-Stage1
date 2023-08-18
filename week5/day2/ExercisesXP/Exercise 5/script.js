// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

const form = document.forms[0];
const p = document.querySelector("p");
const radius = document.querySelector("#radius");

p.addEventListener("click", backgroundColorYellow);
function backgroundColorYellow() {
  p.style.backgroundColor = "yellow";
}

const submitBtn = form.elements.submit;
submitBtn.addEventListener("mouseover", moveRight);

function moveRight() {
  submitBtn.style.transform = "translateX(50rem)";
}

radius.addEventListener("mouseout", biggerFontSize);
function biggerFontSize() {
  radius.style.fontSize = "6rem";
}
