const express = require("express");
const {
	addProduct,
	editProduct,
	getProducts,
	deleteProduct,
} = require("../controllers/admin/adminProductController");
const { getSingleProduct } = require("../controllers/productController");

const route = express.Router();

route.get("/admin/products", getProducts);

route.post("/admin/products", addProduct);

route.put("/admin/products/:id", editProduct);

route.delete("/admin/products/:id", deleteProduct);

route.get("/products/:id", getSingleProduct);

module.exports = route;
