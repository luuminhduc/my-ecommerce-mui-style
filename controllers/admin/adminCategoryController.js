const { checkAdminJwt } = require("../../helpers/checkJwt");
const { resFailure, resSuccess } = require("../../helpers/formatRes");
const Category = require("../../models/Category");

const addCategory = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");
	try {
		const { title } = req.body;
		if (!title) return resFailure(res, 400, "Title is required");
		const category = await Category.create({ title });
		resSuccess(res, 200, { category });
	} catch (err) {
		console.log(err);
		if (err.code === 11000)
			return resFailure(res, 400, "This category already exists");
		resFailure(res, 400, err.message);
	}
};

const deleteCategory = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");
	try {
		const { id } = req.params;
		await Category.findByIdAndDelete(id);
		resSuccess(res, 200, {});
	} catch (err) {
		console.log(err);
		resFailure(res, 400, err.message);
	}
};

const addSubCategory = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");
	try {
		const { sub } = req.body;
		if (!sub) return resFailure(res, 400, "Subcategory title is required");
		const { id } = req.params;
		const category = await Category.findByIdAndUpdate(
			id,
			{
				$addToSet: { subs: sub },
			},
			{ new: true }
		);
		resSuccess(res, 200, { category });
	} catch (err) {
		console.log(err);
		resFailure(res, 400, err.message);
	}
};

const deleteSubCateogry = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 422, "Unauthenticated");
	try {
		const { sub } = req.body;
		if (!sub) return resFailure(res, 400, "Subcategory title is required");
		const { id } = req.params;
		const category = await Category.findByIdAndUpdate(
			id,
			{
				$pull: { subs: sub },
			},
			{ new: true }
		);
		resSuccess(res, 200, { category });
	} catch (err) {
		console.log(err);
		resFailure(res, 400, err.message);
	}
};

module.exports = {
	addCategory,
	addSubCategory,
	deleteSubCateogry,
	deleteCategory,
};
