const addition = function (...arr) {
  let result = 0;
  arr.forEach((v) => (result += v));
  return result;
};

const multiplication = function (...arr) {
  let result = 1;
  arr.forEach((v) => (result *= v));
  return result;
};

module.exports = { addition, multiplication };
