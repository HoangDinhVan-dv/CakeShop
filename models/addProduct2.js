var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addProduct2schema = new Schema({
	Type: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	imagePath: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('AddProduct2', addProduct2schema, 'teras');