const fs = require("fs");

const readFile = function (filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  console.log(fileContent);
};

const writeFile = function (filePath, content) {
  fs.writeFileSync(filePath, content);
};

module.exports = { readFile, writeFile };
