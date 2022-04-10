const mongoose = require("mongoose");

const ProductVariantSchema = new mongoose.Schema({
	product_id: {
		type: String,
		required: true,
	},
	images: {
		type: [String],
		required: true,
		min: 1,
	},
	stock: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const ProductVariant = mongoose.model("productVariant", ProductVariantSchema);

module.exports = ProductVariant;
