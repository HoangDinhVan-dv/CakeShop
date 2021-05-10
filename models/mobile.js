var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mobileschema = new Schema({
	imagePath: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	model: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	spec1: {
		type: String,
		required: true
	},
	spec2: {
		type: String,
		required: true
	},
	spec3: {
		type: String,
		required: true
	},
	spec4: {
		type: String,
		required: true
	},
	spec5: {
		type: String,
		required: true
	},
	spec6: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Mobile', mobileschema);
