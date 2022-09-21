const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In first middleware");
  res.send("<h1>In 'Add Product' Page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express.js!</h1>");
});

app.listen(3000);