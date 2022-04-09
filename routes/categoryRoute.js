const express = require("express");
const {
	addCategory,
	deleteCategory,
	addSubCategory,
	deleteSubCateogry,
} = require("../controllers/admin/adminCategoryController");
const { getCategories } = require("../controllers/categoryController");
const route = express.Router();

route.get("/categories", getCategories);

route.post("/admin/categories", addCategory);
route.delete("/admin/categories/:id", deleteCategory);
route.put("/admin/categories/add-sub/:id", addSubCategory);
route.put("/admin/categories/delete-sub/:id", deleteSubCateogry);

module.exports = route;
