const { resFailure, resSuccess } = require("../helpers/formatRes");
const Category = require("../models/Category");

const getCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		resSuccess(res, 200, { categories });
	} catch (err) {
		console.log(err);
		resFailure(res, 400, err.message);
	}
};

module.exports = { getCategories };
