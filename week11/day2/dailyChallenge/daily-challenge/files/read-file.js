const fs = require("fs");

const readFile = function (file) {
  const content = fs.readFileSync(file, "utf-8");

  console.log(content);
};

module.exports = { readFile };
