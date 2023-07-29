// Conditionals

// Exercise 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let questionAge = prompt("How old are you?");

if (questionAge < 18) {
  console.log("Sorry, you are too young to drive this car. Powering off");
} else if (questionAge == 18) {
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
} else if (questionAge > 18) {
  console.log("Powering On. Enjoy the ride!");
}

// Exercise 2

// let fruit = 'Papayas';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
// }

// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// The code checks if fruit is stircly equals to 'Oranges'. Because it is not the case, it return false and
// the switch command goes to the next case. It checks for 'Mangoes' and return false so goes to the next
// case. Because this time fruit is stricly equals to 'Papayas', it executes the code.

// Introduction To Objects

// Exercise 1
// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let loginCredentials = {
  username: "vailorg",
  password: "1234567",
};

let database = [loginCredentials];
let newsfeed = [
  { username: "name1", timeline: "20/07/23" },
  { username: "name2", timeline: "20/05/23" },
  { username: "name3", timeline: "30/07/23" },
];
console.log(database);
console.log(newsfeed);
