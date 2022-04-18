const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
});

const Attribute = mongoose.model("attribute", AttributeSchema);

module.exports = Attribute;
