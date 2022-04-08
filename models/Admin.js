const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		unique: true,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: true,
	},
});

AdminSchema.statics.login = async function (email, password) {
	const admin = await this.findOne({ email });
	if (admin) {
		const auth = await bcrypt.compare(password, admin.password);
		if (auth) {
			return admin;
		}
		throw Error("Incorrect password");
	}
	throw Error("Email doesn't exist");
};

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
