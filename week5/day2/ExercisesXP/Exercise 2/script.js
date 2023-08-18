// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

/* <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form>
<ul class="usersAnswer"></ul> */

// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const form = document.forms[0];
console.log(form);

const fnameId = document.getElementById("fname");
console.log("fname by ID: ", fnameId);
const lnameId = document.getElementById("lname");
console.log("lname by ID: ", lnameId);
const submitId = document.getElementById("submit");
console.log("Submit by ID:", submitId);
const fnameName = form.elements.firstname;
console.log("fname by name: ", fnameName);
const lnameName = form.elements.lastname;
console.log("lname by name: ", lnameName);
const submitName = form.elements.submit;
console.log("submit by name: ", submitName);

form.addEventListener("submit", test);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
document.querySelector(".usersAnswer").appendChild(li1);
document.querySelector(".usersAnswer").appendChild(li2);

function test(e) {
  e.preventDefault();
  const firstName = fnameName.value;
  const lastName = lnameName.value;

  li1.textContent = firstName;
  li2.textContent = lastName;
}
