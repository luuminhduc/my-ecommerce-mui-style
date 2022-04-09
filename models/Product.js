const mongoose = require("mongoose");

const ProductVariantOption = new mongoose.Schema({
	name: {
		type: String,
	},
});

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
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
	variants: {
		type: [String],
		min: 1,
	},
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
