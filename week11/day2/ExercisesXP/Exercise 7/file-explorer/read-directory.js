const fs = require("fs");

const readDir = function (path) {
  fs.readdir(path, (err, files) => {
    if (err) console.log(err);
    else {
      console.log("\nCurrent directory filenames:\n");
      files.forEach((file) => {
        console.log(file);
      });
      console.log("\n");
    }
  });
};

readDir(__dirname);
