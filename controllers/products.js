const books = [];

const getAddProducts = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product Form",
    link: "/admin/add-product",
  });
};

const postAddProducts = (req, res, next) => {
  const body = { ...req.body };
  books.push(body);
  res.redirect("/shop");
};

const getAllProducts = (req, res, next) => {
  console.log(books);
  res.render("shop", { props: books, docTitle: "All Products", link: "/shop" });
};

module.exports = { getAddProducts, postAddProducts, getAllProducts };
