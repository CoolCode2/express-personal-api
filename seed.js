// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


//var petsVar = require('./Pet.js');
//var moviesVar = require('./Movie.js');
//myinfo.js is being required here




var movieArray = [
{_id: 1, name: "Forrest Gump", rating:"want my money back"},
{_id: 2, name:"Blade Runner", rating:"B+"},
{_id: 3, name: "Fast & the Furious 13", rating:"Excellent"},
{_id: 4, name:"bruno", rating:"Very Funny"},
{_id: 5, name: "Crash", rating:"Yikes!"},
{_id: 6, name:"Dances With Wolves", rating:"Classic"}
];

// adds me to the db with the pets and movies array
// var personArray = [
// {
//   name: "Smauel Jackson",
//   github_link: "https://github.com/CoolCode2",
//   github_profile_img: String,
//   current_city: "Littleton",
//  movies: movieArray,
//  pets: petArray
 
// }
// ];
////////////////////////////////// people
db.Movie.remove({}, function(err, movie) {
	if (err) {
		console.log('Error occurred in remove', err);
	} else {
		console.log('removed all flicks');
		db.Movie.create(movieArray, function(err, movie) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("created", movieArray.length, "films");
			}
			
			///this is spelled right and works with people. but not with pets
		});
	}
});
		//get from db
	// 	db.Person.find({}, function(err, p){
	// 		console.log(p);
	// 	});
	// }


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
