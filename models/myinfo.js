var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var moviesVar = require('./Movie.js');
var petsVar = require('./Pet.js');


// var Movie = mongoose.model('Movie', MovieSchema);
// var Pet = mongoose.model('Pet', PetSchema);
var PetSchema = new Schema({
		name: String,
		cuteness_level: String,
		img_url: String

	});

var PersonSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_img: String,
  current_city: String,
  movies: [moviesVar.MovieSchema],
 pets: [petsVar.PetSchema]
});


//save our schemas in a var that we can export and use elsewhere


var Person = mongoose.model('Person', PersonSchema); 
// module.exports = Pet;
// module.exports = Movie;
module.exports = Person;

//'persons' should be the name of the collection
 //send Person out
//module.exports.Movie = Movie; //send Movie out
// module.exports.Pet = Pet; // send Pet out




// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;
