const jwt = require("jsonwebtoken");
const UserJwt = require("../models/UserJwt");
const AdminJwt = require("../models/AdminJwt");

const checkJwt = async (req) => {
	let id = "";
	const token = req?.headers?.authorization?.split(" ")[1];
	if (token) {
		const exist = await UserJwt.findOne({ token });
		if (exist) {
			await jwt.verify(token, process.env.jwtToken, async (err, code) => {
				if (!err) id = code.id;
			});
		}
	}
	return id;
};

const checkAdminJwt = async (req) => {
	let id = "";
	const token = req?.headers?.authorization?.split(" ")[1];
	if (token) {
		const exist = await AdminJwt.findOne({ token });
		if (exist) {
			await jwt.verify(token, process.env.adminJwt, async (err, code) => {
				if (!err) id = code.id;
			});
		}
	}
	return id;
};

module.exports = { checkJwt, checkAdminJwt };
