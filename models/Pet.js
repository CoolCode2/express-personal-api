var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
		name: String,
		cuteness_level: String,
		img_url: String

	});

var Pet = mongoose.model('Pet', PetSchema);
exports.Pet = Pet; //exports the Pet Variable
exports.PetSchema= PetSchema; // exports PetSchema

// crudable resource is an entireley different schema!!!

//have pets and movies embedded into my resource

