const { checkAdminJwt } = require("../../helpers/checkJwt");
const { resFailure, resSuccess } = require("../../helpers/formatRes");
const Attribute = require("../../models/Attribute");

const getAttributes = async (req, res) => {
	try {
		const attributes = await Attribute.find();
		resSuccess(res, 200, { attributes });
	} catch (err) {
		resFailure(res, 400, err.message);
	}
};

const addAttribute = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 400, "Unauthenticated");
	const { title: reqTitle } = req.body;
	if (!reqTitle) return resFailure(res, 400, "Title is required");
	const title = reqTitle.toLowerCase();
	try {
		const attribute = await Attribute.create({ title });
		resSuccess(res, 200, { attribute });
	} catch (err) {
		if (err.code === 11000)
			return resFailure(res, 400, "This attribute already exists");
		resFailure(res, 400, err.message);
	}
};

const deleteAttribute = async (req, res) => {
	const uid = await checkAdminJwt(req);
	if (!uid) return resFailure(res, 400, "Unauthenticated");
	const { id } = req.params;
	try {
		await Attribute.findByIdAndUpdate(id);
		resSuccess(res, 200, {});
	} catch (err) {
		if (res.code === 11000)
			return resFailure(res, 400, "This attribute already exists");
		resFailure(res, 400, err.message);
	}
};

module.exports = { addAttribute, getAttributes, deleteAttribute };
