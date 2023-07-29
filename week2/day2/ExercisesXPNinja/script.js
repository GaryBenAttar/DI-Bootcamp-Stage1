// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

// console.log(5 >= 1);
// // Prediction: true
// // Actual: true
// console.log(0 === 1);
// // Prediction: false
// // Actual: false
// console.log(4 <= 1);
// // Prediction: false
// // Actual: false
// console.log(1 != 1);
// // Prediction: false
// // Actual: false
// console.log("A" > "B");
// // Prediction: false
// // Actual: false
// console.log("B" < "C");
// // Prediction: true
// // Actual: true
// console.log("a" > "A");
// // Prediction: false
// // Actual: true
// console.log("b" < "A");
// // Prediction: true
// // Actual: false
// console.log(true === false);
// // Prediction: false
// // Actual: false
// console.log(true != true);
// // Prediction: false
// // Actual: false

// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5

// let stringNumber = prompt("What number should we add?");
// let numbers = stringNumber.split(",");
// let sumNumbers = 0;
// console.log(numbers);

// for (i = 0; i < numbers.length; i++) {
//   sumNumbers += Number(numbers[i]);
// }

// console.log(sumNumbers);

// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

const nemoString = prompt("Give me a phrase containing the word nemo?");
