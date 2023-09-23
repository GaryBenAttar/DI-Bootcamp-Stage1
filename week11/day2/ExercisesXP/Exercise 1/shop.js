const product = require("./product.js");

const productSearch = function (pro) {
  const result = product.products.filter((v) => v.name === pro);
  console.log(result);
};

productSearch("apples");
productSearch("Smart TV");
productSearch("tomatos");
productSearch("hoven");
