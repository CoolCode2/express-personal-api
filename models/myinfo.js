var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

/*
var PetSchema = new Schema({
		name: String,
		cuteness_level: String
	});

var MovieSchema = new Schema ({
	name: String
});
*/
var PersonSchema = new Schema({
  github_link: String,
  github_profile_img: String,
  current_city: String
  //movies:[movieSchema],
  //pets: [PetSchema]
});


//save our schemas in a var that we can export and use elsewhere
var Person = mongoose.model('Person', PersonSchema); 
module.exports = Person; //send Person out




// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;
