const express = require("express");
const { addProduct } = require("../controllers/admin/adminProductController");

const route = express.Router();

route.post("/admin/products", addProduct);

module.exports = route;
