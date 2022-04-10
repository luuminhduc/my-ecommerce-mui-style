const express = require("express");
const {
	addProductVariant,
} = require("../controllers/admin/adminProductVariantController");
const upload = require("../helpers/initMulter");

const route = express.Router();

route.post(
	"/admin/products/variants",
	upload.array("images"),
	addProductVariant
);

module.exports = route;
