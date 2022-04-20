const express = require("express");
const {
	addProductVariant,
} = require("../controllers/admin/adminProductVariantController");
const {
	getProductVariantsByProduct,
} = require("../controllers/productVariantController");
const upload = require("../helpers/initMulter");

const route = express.Router();

route.get("/variants/products/:id", getProductVariantsByProduct);

route.post(
	"/admin/products/variants",
	upload.array("images"),
	addProductVariant
);

module.exports = route;
