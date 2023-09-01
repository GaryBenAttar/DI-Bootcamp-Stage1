// Exercise 2 : Promises

// Instructions

// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const autoResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 4000);
});

autoResolve.then((result) => console.log(result));
