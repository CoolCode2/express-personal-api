var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var MovieSchema = new Schema ({
	name: String
});

var PersonSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_img: String,
  current_city: String
  //movies: [MovieSchema],
 // pets: [PetSchema]
});


//save our schemas in a var that we can export and use elsewhere


var Person = mongoose.model('Person', PersonSchema); 

module.exports = Person;

//'persons' should be the name of the collection
 //send Person out
//module.exports.Movie = Movie; //send Movie out
// module.exports.Pet = Pet; // send Pet out




// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;
