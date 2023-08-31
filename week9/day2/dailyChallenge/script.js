// Instructions

// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

const form = document.forms[0];
const name = form.elements.name;
const lastName = form.elements.lastname;

let formObj = { name: "", lastname: "" };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formObj.name = name.value;
  formObj.lastname = lastName.value;
  const JSONformObj = JSON.stringify(formObj);

  const p = document.createElement("p");
  p.textContent = JSONformObj;

  document.body.appendChild(p);
});
