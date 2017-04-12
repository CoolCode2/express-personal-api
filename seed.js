// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');



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

var moviesList = [
{name: "Forrest Gump"},
{name:"Blade Runner"}
];


var personArray = [
{
  name: "Smauel Jackson",
  github_link: "https://github.com/CoolCode2",
  github_profile_img: String,
  current_city: "Littleton",
  pets: petArray,
  movies: moviesList
}
];

db.Person.remove({}, function(err, books){
	if(err) {
		console.log('Error occurred in remove', err);
	} 
	else {
	    console.log('removed all books');

		db.Person.create(personArray, function(err, person){
			if (err){
				console.log(err);
			} 
			console.log('recreated all people');
			console.log("created", personArray.length, "peeps");
			process.exit();
		});
	}
});
	

 
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
