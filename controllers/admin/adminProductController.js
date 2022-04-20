const { checkAdminJwt } = require("../../helpers/checkJwt");
const { resFailure, resSuccess } = require("../../helpers/formatRes");
const Product = require("../../models/Product");

const addProduct = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");

	try {
		const { title, description, category, subCategory, attributes } = req.body;
		if (
			!title ||
			!description ||
			!category ||
			!subCategory ||
			attributes?.length < 1
		)
			return resFailure(res, 400, "Missing fields");

		const product = await Product.create({
			title,
			description,
			category,
			subCategory,
			attributes,
		});

		resSuccess(res, 200, { product });
	} catch (err) {
		console.log(err);
	}
};

const editProduct = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");

	try {
		const { id } = req.params;
		const { title, description, category, subCategory, attributes } = req.body;
		const product = await Product.findByIdAndUpdate(
			id,
			{
				title: title ? title : this.title,
				description: description ? description : this.description,
				category: category ? category : this.category,
				subCategory: subCategory ? subCategory : this.subCategory,
				attributes: attributes?.length > 0 ? attributes : this.attributes,
			},
			{ new: true }
		);
		resSuccess(res, 200, { product });
	} catch (err) {}
};

const getProducts = async () => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");
	try {
		const products = await Product.find();
		resSuccess(res, 200, { products });
	} catch (err) {
		resFailure(res, 400, err.message);
	}
};

module.exports = { addProduct, editProduct, getProducts };
