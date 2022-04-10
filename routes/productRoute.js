const express = require("express");
const {
	addProduct,
	editProduct,
} = require("../controllers/admin/adminProductController");
const { getSingleProduct } = require("../controllers/productController");

const route = express.Router();

route.post("/admin/products", addProduct);

route.put("/admin/products/:id", editProduct);

route.get("/products/:id", getSingleProduct);

module.exports = route;
