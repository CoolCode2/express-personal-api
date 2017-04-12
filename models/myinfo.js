var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PetSchema = new Schema({
		name: String,
		cuteness_level: String,
		img_url: String
	});

var MovieSchema = new Schema ({
	name: String
});

var PersonSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_img: String,
  current_city: String,
  movies: [MovieSchema],
  pets: [PetSchema]
});


//save our schemas in a var that we can export and use elsewhere
var Person = mongoose.model('Person', PersonSchema); 
//'persons' should be the name of the collection
module.exports = Person; //send Person out




// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;
