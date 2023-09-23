const fs = require("fs");

const copyFile = function (init, copy) {
  const content = fs.readFileSync(init, "utf-8");
  fs.writeFileSync(copy, content);
};

copyFile("./source.txt", "./desination.txt");

// module.exports = copyFile;
