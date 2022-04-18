const express = require("express");
const {
	addAttribute,
	getAttributes,
	deleteAttribute,
} = require("../controllers/admin/adminAttributeController");
const route = express.Router();

route.get("/attributes", getAttributes);

route.post("/admin/attributes", addAttribute);

route.delete("/admin/attributes/:id", deleteAttribute);

module.exports = route;
