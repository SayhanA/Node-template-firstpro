const express = require("express");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

const { router: adminRoute } = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);

app.use("/", (req, res, next) => {
  res.render("404", { docTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT: ${PORT}`);
});
