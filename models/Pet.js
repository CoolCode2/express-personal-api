var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
		name: String,
		cuteness_level: String,
		img_url: String

	});

var Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;