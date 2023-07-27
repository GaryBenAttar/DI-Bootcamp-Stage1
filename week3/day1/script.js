//Week 3 Day1
// Exercise 1

let addressNumber = 33;
let addressStreet = "Allee Antares";
let country = "France";

let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;

console.log(globalAddress);

// Exercise 2

let birthYear = 1993;
let futureYear = 2064;

let futureAge = futureYear - birthYear;

console.log(`I will be ${futureAge} in ${futureYear}`);

// Exercise 3

let pets = ["cat", "dog", "fish", "rabbit", "cow"];

console.log(pets[1]);

pets.splice(3, 1, "horse");
console.log(pets);

console.log(length(pets));
