const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	shipping: {
		city: {
			type: String,
			default: "",
		},
		district: {
			type: String,
			default: "",
		},
		ward: {
			type: String,
			default: "",
		},
		address: {
			type: String,
			default: "",
		},
	},
	isActive: {
		type: Boolean,
		default: true,
	},
	avatar: {
		type: String,
		default: "",
	},
	phone: {
		type: String,
		default: "",
	},
	created_at: {
		type: Date,
		default: new Date(),
	},
});

UserSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) return user;
		throw Error("Incorrect password");
	}
	throw Error("User does not exist");
};

UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
