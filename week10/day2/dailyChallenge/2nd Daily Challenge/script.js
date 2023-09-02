const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

//   Create three functions. The two first functions should return a promise..

//   The first function is named toJs():
//   this function converts the morse json string provided above to a morse javascript object.
//   if the morse javascript object is empty, throw an error (use reject)
//   else return the morse javascript object (use resolve)

//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

//   This function asks the user for a word or a sentence.
//   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//   else return an array with the morse translation of the user’s word.
//   if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//   if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

//   The third function called joinWords(morseTranslation), takes one argument: the morse translation array

//   this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

//   Chain the three functions.
//   Example:
//   "Hello" gives you
//   ....
//   .
//   .-..
//   .-..
//   ---

const p = document.getElementsByTagName("p");

const toJs = function (str) {
  return new Promise((resolve, reject) => {
    if (typeof JSON.parse(str) === "object") {
      resolve(JSON.parse(str));
    } else {
      reject("Error, morse is empty");
    }
  });
};

const toMorse = function (morseJS) {
  const strToMorse = prompt("Give me a word or a sentence:")
    .toLowerCase()
    .replaceAll(" ", "")
    .split("");
  console.log(strToMorse);

  let counter = 0;
  let morseStr = [];

  strToMorse.forEach((v) => {
    if (!Object.keys(morseJS).includes(v)) counter++;
    else morseStr.push(morseJS[v]);
  });

  return new Promise((resolve, reject) => {
    if (counter === 0) {
      resolve(morseStr);
    } else {
      reject("Error: some characters cannot be translated in morse");
    }
  });
};

const joinWords = function (morse) {
  morse.forEach((v) => {
    p[0].innerHTML = p[0].innerHTML + v + "<br/>";
  });
};

toJs(morse).then((result) =>
  toMorse(result).then((message) => joinWords(message))
);
