// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

const isBlank = function (givenString) {
  if (givenString.length == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isBlank("");
isBlank("abc");

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

const abbrevName = function (fullName) {
  let spaceIndex = fullName.indexOf(" ");
  let abbreviation = fullName.replace(fullName.slice(spaceIndex + 2), ".");
  return abbreviation;
};

console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

const swapCase = function (str) {
  let strSwap = "";
  let strUpper = str.toUpperCase();
  let strLower = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (strUpper[i] === str[i]) {
      strSwap = strSwap.concat(strLower[i]);
    } else {
      strSwap = strSwap.concat(strUpper[i]);
    }
  }
  console.log(strSwap);
};

swapCase("The Quick Brown Fox");

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

// const isOmnipresent = function (givenArray) {
//   for (let i = 0; i < givenArray.length; i++) {
//     for (let j = 0; j < givenArray[i].length; j++) {}
//   }
// };
