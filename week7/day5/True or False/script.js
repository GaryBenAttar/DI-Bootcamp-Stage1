// Instructions

// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true)

// allTruthy(true, false, true)

// allTruthy(5, 4, 3, 2, 1, 0)

const allTruthy = function (...values) {
  return !values.some((v) => {
    return !v;
  });
};

console.log(allTruthy(true, true, true));

console.log(allTruthy(true, false, true));

console.log(allTruthy(5, 4, 3, 2, 1, 0));
