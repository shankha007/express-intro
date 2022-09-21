const express = require("express");

const app = express();

// app.use("/products", (req, res, next) => {
//   console.log("In the products page");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("In home page");
//   res.send("<h1>Welcome to Home Page</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>In the Users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>In the Home Page</h1>");
});

app.listen(3000);
