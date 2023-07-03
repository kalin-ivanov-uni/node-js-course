const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

const product = [];
//filter only get request
// app.get
// app.post
// app.use -- all requests

router.get("/add-product", (req, resp, next) => {
  console.log("test");
  resp.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, resp, next) => {
  console.log(req.body);
  product.push({ title: req.body.title });
  resp.redirect("/");
});

exports.routes = router;
exports.products = product;
