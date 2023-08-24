// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// Function declaration:

function kgToGramsDec(kg) {
  return kg * 1000;
}

console.log(kgToGramsDec(35));

// Function expression:

const kgToGramsExp = function (kg) {
  return kg * 1000;
};

console.log(kgToGramsExp(13));

// A function expression caches an anonymous function inside a variable while in a function declaration the function itself is named.

// Arrow function:

const kgToGramsArrow = (kg) => 1000 * kg;
console.log(kgToGramsArrow(8));
