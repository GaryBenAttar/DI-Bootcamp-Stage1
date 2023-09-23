const data = require("./data");

const averageAge = function (arr) {
  let result = 0;
  arr.forEach((v) => (result = result + v.age));
  result = result / arr.length;

  console.log(result);
};

averageAge(data.data);
