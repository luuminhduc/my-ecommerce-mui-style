const { resFailure, resSuccess } = require("../../helpers/formatRes");
const Admin = require("../../models/Admin");
const jwt = require("jsonwebtoken");
const Jwt = require("../../models/AdminJwt");
const { checkAdminJwt } = require("../../helpers/checkJwt");

const tokeAge = 365 * 24 * 60 * 60;

const createToken = (id) => {
	return jwt.sign({ id }, process.env.jwtToken, {
		expiresIn: tokeAge,
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) return resFailure(res, 400, "Missing fields");
	try {
		const admin = await Admin.login(email, password);
		const token = createToken(admin._id);
		await Jwt.create({ uid: admin._id, token });
		resSuccess(res, 200, { token });
	} catch (err) {
		resFailure(res, 400, err.message);
	}
};

module.exports = { login };
