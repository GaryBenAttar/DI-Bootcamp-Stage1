// Exercise 1 : Favorite Color
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

// 4. Finally console.log the new concatenated string.

let str1 = "Gary";
let str2 = "Benattar";

let newWord = `${str2.slice(0, 2) + str1.slice(2)} ${
  str1.slice(0, 2) + str2.slice(2)
}`;

console.log(newWord);

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = Number(prompt("First number?"));
let num2 = Number(prompt("Second number?"));
let operation = prompt("What operation do you want to do (+, -, *, /)?");

if (operation === "+") {
  alert(num1 + num2);
} else if (operation === "-") {
  alert(num1 - num2);
} else if (operation === "*") {
  alert(num1 * num2);
} else if (operation === "/") {
  alert(num1 / num2);
} else {
  alert("I do not recognize the operation");
}
