const mongoose = require("mongoose");

const UserJwtSchema = new mongoose.Schema({
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

const UserJwt = mongoose.model("userJwt", UserJwtSchema);

module.exports = UserJwt;
