const { resFailure, resSuccess } = require("../helpers/formatRes");
const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");

const getSingleProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		const productVariants = await ProductVariant.find({ product_id: id });
		resSuccess(res, 200, { ...{ ...product }._doc, productVariants });
	} catch (err) {
		console.log(err);
		resFailure(err.message);
	}
};

module.exports = { getSingleProduct };
