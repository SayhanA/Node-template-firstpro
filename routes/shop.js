const { books } = require("./admin");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.log(books);
  res.render("shop", { docTitle: "All Products" });
});

module.exports = router;
