// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

let userWords = prompt("Give me several words separated by a coma:");

const starFraming = function (str) {
  strArray = str.split(",");
  let longestWordLength = 0;

  for (i in strArray) {
    if (strArray[i].length > longestWordLength) {
      longestWordLength = strArray[i].length;
    }
  }
  let starLines = "**";
  let numberSpaces = "";

  for (let j = 0; j < longestWordLength; j++) {
    starLines = starLines.concat("*");
  }
  starLines = starLines.concat("**");
  console.log(starLines);
  for (i in strArray) {
    numberSpaces = "";

    for (let j = 0; j < longestWordLength - strArray[i].length; j++) {
      numberSpaces = numberSpaces.concat(" ");
    }
    console.log(`* ${strArray[i]}${numberSpaces} *`);
  }
  console.log(starLines);
};

starFraming(userWords);
