// 🌟 Exercise 3: Drag & Drop
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #target {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           background: yellow;
//         }
//         #box {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>
//     </body>
//     </html>

// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

const target = document.getElementById("target");
const box = document.getElementById("box");

target.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("dragover");
});

target.addEventListener("drop", () => {
  console.log("dropped");
  target.appendChild(box);
});
