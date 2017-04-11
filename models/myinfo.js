var mongoose = require('mongoose'),
 Schema = mongoose.Schema;


var PetSchema = new Schema({
		name: String,
		cuteness_level: String
	});

var PersonSchema = new Schema({
  Name: Cole,
  github_link: "https://github.com/CoolCode2",
  github_profile_img: String,
  current_city: Littleton,
  pets: [PetsSchema]
});
//save our schemas in a var that we can export and use elsewhere
var Person = mongoose.model('Person', PersonSchema); 
module.exports = Person; //send Person out




// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;
