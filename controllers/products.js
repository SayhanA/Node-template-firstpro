const Product = require("../models/product");

const getAddProducts = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product Form",
    link: "/admin/add-product",
  });
};

const postAddProducts = (req, res, next) => {
  const product = new Product(req.body.name, req.body.description);
  product.save();
  res.redirect("/shop");
};

const getAllProducts = (req, res, next) => {
  Product.fetchAll((productData) => {
    console.log({ productData });
    res.render("shop", {
      props: productData, // Pass the fetched products to the view
      docTitle: "All Products", // Title for the page
      link: "/shop", // Active link for navigation
    });
  });
};


module.exports = { getAddProducts, postAddProducts, getAllProducts };
