const { getAddProducts, postAddProducts } = require("../controllers/products");

const router = require("express").Router();



router.get("/add-product", getAddProducts);

router.post("/add-product", postAddProducts);

module.exports = { router };
