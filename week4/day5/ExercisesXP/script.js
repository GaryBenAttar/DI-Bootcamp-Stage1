// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

const container = document.getElementById("container");
console.log("container:", container);

let lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

lists.forEach((list) => (list.firstElementChild.textContent = "Gary"));

// 🌟 Exercise 2 : Users And Style
// Instructions

/* <div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul> */

// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

document.getElementsByTagName("div")[1].style.backgroundColor = "LightBlue";
document.getElementsByTagName("div")[1].style.padding = "5px";
document.getElementsByTagName("li")[4].style.display = "none";
document.getElementsByTagName("li")[5].style.border = "solid";
document.querySelector("body").style.fontFamily = "Arial";

// 🌟 Exercise 3 : Change The Navbar
// Instructions
/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */

// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");
const newLi = document.createElement("li");
newLi.textContent = "Logout";
document
  .getElementById("socialNetworkNavigation")
  .children[0].appendChild(newLi);

// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let allBooks = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    image: "img/harrypotter.jpg",
    alreadyRead: true,
  },
  {
    title: "The 10x Rule",
    author: "Grant Cardone",
    image: "img/10rule.jpg",
    alreadyRead: false,
  },
];

const bookList = document.querySelector(".listBooks");
const bookTable = document.createElement("table");

const newTr = function () {
  const tr = document.createElement("tr");
  bookList.appendChild(bookTable);
  bookTable.appendChild(tr);
};

const newTh = function (str) {
  const th = document.createElement("th");
  th.textContent = `${str}`;
  bookTable.lastChild.appendChild(th);
};

const newTd = function (i, str) {
  const td = document.createElement("td");
  const allBooksId = str.toLowerCase();
  bookTable.lastChild.appendChild(td);
  if (allBooks[i].alreadyRead === true) {
    td.style.color = "red";
  }
  if (allBooksId === "image") {
    const img = document.createElement("img");
    img.setAttribute("src", allBooks[i][allBooksId]);
    td.appendChild(img);
    img.style.width = "100px";
  } else {
    td.textContent = allBooks[i][allBooksId];
  }
};

newTr();
newTh("Title");
newTh("Autor");
newTh("Image");

for (let i = 0; i < allBooks.length; i++) {
  newTr();
  newTd(i, "Title");
  newTd(i, "Author");
  newTd(i, "Image");
}
