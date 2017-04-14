// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


//var petsVar = require('./Pet.js');
//var moviesVar = require('./Movie.js');
//myinfo.js is being required here


var petArray = [
{
		name: "Ziggy",
		cuteness_level: "Extreme",
		img_url: String
	},
	{
		name: "Sophie",
		cuteness_level: "Really Great",
		img_url: String
	},
	{
		name: "Coco",
		cuteness_level: "Exceptional",
		img_url: String
	},
	{
		name: "Winnie",
		cuteness_level: "Maximum",
		img_url: String
	},
	];

var movieArray = [
{name: "Forrest Gump"},
{name:"Blade Runner"}
];


var personArray = [
{
  name: "Smauel Jackson",
  github_link: "https://github.com/CoolCode2",
  github_profile_img: String,
  current_city: "Littleton",
 movies: movieArray,
 pets: petArray
 
}
];
////////////////////////////////// people
db.Person.remove({}, function(err, movie) {
	if (err) {
		console.log('Error occurred in remove', err);
	} else {
		console.log('removed all people');
		db.Person.create(personArray, function(err, movie) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("created", personArray.length, "peeps");
			}
			
			///this is spelled right and works with people. but not with pets
		});
		//get from db
		db.Person.find({}, function(err, p){
			console.log(p);
		});
	}

});
/////////////////////////////// pets
// db.Pet.remove({}, function(err, books) {
// 	if (err) {
// 		console.log('Error occurred in remove', err);
// 	} else {
// 		console.log('removed all pets');
// 		db.Pet.create(petArray, function(err, movie) {
// 			if (err) {
// 				console.log(err);
// 			}
// 			console.log("created", petArray.length, "pets");
			

// 		});
// 	}
	
// });
/////////////////////////////// movies
// db.Movie.remove({}, function(err, books) {
// 	if (err) {
// 		console.log('Error occurred in remove', err);
// 	} else {
// 		console.log('removed all movies');
// 		db.Movie.create(movieArray, function(err, movie) {
// 			if (err) {
// 				console.log(err);
// 			}
// 			console.log("created", movieArray.length, "flicks");
// 			process.exit();

// 		});
// 	}
	
// });
	

 
/*
 db.Author.remove({}, function(err, authors) {
  console.log('removed all authors');
  db.Author.create(authors_list, function(err, authors){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all authors');
    console.log("created", authors.length, "authors");
    */

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
