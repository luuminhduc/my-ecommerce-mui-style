const mongoose = require("mongoose");

const AdminJwtSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true,
	},
	uid: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		default: new Date(),
	},
});

const AdminJwt = mongoose.model("adminJwt", AdminJwtSchema);

module.exports = AdminJwt;
