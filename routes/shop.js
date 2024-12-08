const { getAllProducts } = require("../controllers/products");

const router = require("express").Router();

router.get("/", getAllProducts);

module.exports = router;
