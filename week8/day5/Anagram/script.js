// Instructions

// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

const isAnagram = function (strOne, strTwo) {
  const arrStrOneSorted = [...strOne.toLowerCase().replace(" ", "")].sort();
  const arrStrTwoSorted = [...strTwo.toLowerCase().replace(" ", "")].sort();
  let arrCompared = [];
  if (arrStrOneSorted.length === arrStrTwoSorted.length) {
    const compareArr = function (arrOne, arrTwo) {
      for (let i = 0; i < arrOne.length; i++) {
        arrOne[i] === arrTwo[i]
          ? arrCompared.push(true)
          : arrCompared.push(false);
      }
    };
    compareArr(arrStrOneSorted, arrStrTwoSorted);

    return arrCompared.includes(false) ? false : true;
  } else {
    return false;
  }
};

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("A word", "Another Word"));
