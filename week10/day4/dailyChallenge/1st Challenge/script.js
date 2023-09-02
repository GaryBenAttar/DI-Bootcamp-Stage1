// 1st Challenge

// Instructions

// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

// // expected output: Array [3, 42, "foo"]
function allPromise(...promises) {
  Promise.all(promises).then((result) => console.log(result));
}

allPromise(promise1, promise2, promise3);

// Promise.all is a promise that is resolved only if and when all the promises are resolved. If one of the promises is rejecred, the Promise.all is rejected also
