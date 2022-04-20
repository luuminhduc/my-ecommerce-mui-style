const express = require("express");
const {
	addProduct,
	editProduct,
	getProducts,
} = require("../controllers/admin/adminProductController");
const { getSingleProduct } = require("../controllers/productController");

const route = express.Router();

route.get("/admin/producys", getProducts);

route.post("/admin/products", addProduct);

route.put("/admin/products/:id", editProduct);

route.get("/products/:id", getSingleProduct);

module.exports = route;
