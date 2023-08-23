// 🌟 Exercise 1 : Scope

// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// // #1

// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// Prediciton: inside the funcOne function 3
// Explanation: a is inside the function scope and a is superior to 1 then a get reassigned to 3.

// // #1.1 - run in the console:

// funcOne()

// // #1.2 What will happen if the variable is declared
// // with const instead of let ?

// Prediction: We get an error
// Explanation: We cannot reassigne a const variable.

// //#2

// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// Prediction: inside the funcThree function 0
//             inside the funcTwo function 5
// Explanation: a is in the global scope thus accessible by funcTwo and funcThree.
//              The first time funcThree is called, a is equal to 0 then it is reassigned to 5

// // #2.2 What will happen if the variable is declared
// // with const instead of let ?

// Prediction: We get an error
// Explanation: const cannot be reassigned

// //#3

// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

//  Prediction: Error
//  Explanation: a is not assigned inside funcFive scope

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// console.log(funcFour(), funcFive());

// //#4

// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

//  Prediction: inside the funcSix function test
//  Explanation: a is declared inside funcSix thus accessible by funcSix

// // #4.1 - run in the console:

// funcSix()
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?

//  Prediction: inside the funcSix function test
//  Explanation: a does not get reassigned so it does not matter if it is assigned with let or const

// //#5

// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

//  Prediction: in the if block 5, outside the if block 2
//  Explanation: in the if block a new variable called a is declared

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?

// Prediction: Same thing happens because the variable is not reassigned.
