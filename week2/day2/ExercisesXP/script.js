/* Exercise 1: Your Favorite Food
     Instructions

     Store your favorite food into a variable.
     
     Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

     Console.log I eat <favorite food> at every <favorite meal> */

let favoriteFood = "Pasta Rose";
let favoriteMeal = "Dinner";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

/* Exercise 2: Series
    Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log(
  `I watch ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
);

/* Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made. */

myWatchedSeries[2] = "friends";
myWatchedSeries.push("game of thrones");
myWatchedSeries.splice(0, 1);
console.log(myWatchedSeries[0][2]);
console.log(myWatchedSeries);

/* Exercise 3 : The Temperature Converter
Instructions
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32 */

const temperatureCelsius = 12;
const temperatureFahrenheit = (temperatureCelsius / 5) * 9 + 32;
console.log(`${temperatureCelsius}°C is ${temperatureFahrenheit}°F`);

/* Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5 */

// What will be the outcome of a + b in the first expression ?

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: It will output 55 because 34 and 21 are numbers
// Actual: 55

// What will be the outcome of a + b in the second expression ?

a = 2;

console.log(a + b); //second expression
// Prediction: It will output 23 because the values of a became 2 which is a number and 21 is still a number
// Actual: 23

// What is the value of c?

// The value of c is undifined

// Analyse the code below, what will be the outcome?

console.log(3 + 4 + "5");
// Prediction: It will output NaN because '5' is a string
// Actual: 75

/* Exercise 5 : Guess The Answers #2
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

typeof("potato")
// Prediction: Vegetable
// Actual: String 


What is the output of each of the expressions below? */

console.log(typeof 15);
// Prediction: number
// Actual: number

console.log(typeof 5.5);
// Prediction: number
// Actual: number

console.log(typeof NaN);
// Prediction: NaN
// Actual: number

console.log(typeof "hello");
// Prediction: string
// Actual: string

console.log(typeof true);
// Prediction: boolean
// Actual: boolean

console.log(typeof (1 != 2));
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s");
// Prediction: "hamburgers"
// Actual: "hamburgers"

console.log("hamburgers" - "s");
// Prediction: NaN
// Actual: NaN

console.log("1" + "3");
// Prediction: 13
// Actual: 13

console.log("1" - "3");
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5);
// Prediction: NaN
// Actual: NaN

console.log(99 * "hello");
// Prediction: NaN
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual:

console.log(1 == "1");
// Prediction: true
// Actual:

console.log(1 === "1");
// Prediction: false
// Actual:

/* Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



What is the output of each of the expressions below? */

console.log(5 + "34");
// Prediction: 534
// Actual: 534

console.log(5 - "4");
// Prediction: 1
// Actual: 1

console.log(10 % 5);
// Prediction: 0
// Actual: 0

console.log(5 % 10);
// Prediction: 5
// Actual: 5

console.log("Java" + "Script");
// Prediction: JavaScript
// Actual: JavaScript

console.log(" " + " ");
// Prediction:
// Actual:

console.log(" " + 0);
// Prediction:  0
// Actual:  0

console.log(true + true);
// Prediction: true
// Actual: 2

console.log(true + false);
// Prediction: false
// Actual: 1

console.log(false + true);
// Prediction: false
// Actual: 1

console.log(false - true);
// Prediction: NaN
// Actual: -1

console.log(!true);
// Prediction: false
// Actual: false

console.log(3 - 4);
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: NaN
// Actual: NaN
