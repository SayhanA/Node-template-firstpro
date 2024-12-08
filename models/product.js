const fs = require("fs");
const path = require("path");

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
const getProductFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) cb([]);
    else cb(JSON.parse(data));
  });
};

class Product {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
}

module.exports = Product;
