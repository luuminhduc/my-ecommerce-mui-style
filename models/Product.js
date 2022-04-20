const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	subCategory: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		default: new Date(),
	},
	attributes: {
		type: [String],
		min: 1,
	},
	status: {
		type: Boolean,
		default: true,
	},
	discount: {
		type: Boolean,
		default: false,
	},
	discountRate: {
		type: Number,
		default: 0,
	},
	brand: {
		type: String,
		required: false,
	},
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
