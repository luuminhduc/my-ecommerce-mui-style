const { resFailure, resSuccess } = require("../helpers/formatRes");
const ProductVariant = require("../models/ProductVariant");

const getProductVariantsByProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const variants = await ProductVariant.find({ product_id: id });
		resSuccess(res, 200, { variants });
	} catch (err) {
		resFailure(res, 400, err.message);
	}
};

module.exports = { getProductVariantsByProduct };
