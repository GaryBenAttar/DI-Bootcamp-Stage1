// Functions

// Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

let parentsAge = function (myAge) {
  console.log(
    `My mum is ${myAge * 2} years old and my da is ${myAge * 2 * 1.2}`
  );
};

parentsAge(21);

// Exercise 2
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

let mumAge = function (myAge) {
  return myAge * 2;
};

console.log(mumAge(21));
