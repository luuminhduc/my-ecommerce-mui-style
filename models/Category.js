const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	subs: {
		type: [String],
		default: [],
	},
});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
