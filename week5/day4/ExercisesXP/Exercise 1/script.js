// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function helloWorld() {
  alert("Hello World!");
}

setTimeout(helloWorld, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function newP() {
  const p = document.createElement("p");
  p.textContent = "Hello World!";
  document.getElementById("container").appendChild(p);
}

setTimeout(newP, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const newPEvery2s = setInterval(newP, 2000);

document.getElementById("clear").addEventListener("click", stopNewP);
function stopNewP() {
  clearInterval(newPEvery2s);
}
