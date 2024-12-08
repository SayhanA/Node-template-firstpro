const error404 = (req, res, next) => {
  res.render("404", { docTitle: "Page Not Found" });
};

module.exports = { error404 };
