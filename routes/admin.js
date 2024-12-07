const router = require("express").Router();

const books = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product Form" });
});

router.post("/product", (req, res, next) => {
  const body = { ...req.body };
  books.push(body);
  res.redirect("/shop");
});

module.exports = { router, books };
