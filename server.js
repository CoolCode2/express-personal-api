// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
//body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use(bodyParser.json());
//app.listen(process.env.PORT || 3000);

/************
 * DATABASE *
 ************/

var myInfo = [
  {
    name: "cole",
    github_link:'https://github.com/CoolCode2',
    github_image:"https://avatars2.githubusercontent.com/u/26190714?v=3&s=460",
    city:"Littleton",
      pets:[{name:"Ziggy",type:"dog",cutenessLevel:"extreme",img_url:""}]
  }
];

// var db = require('./models');
var db = require ('./models');


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));
//this line serves up everything in the public file to users

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//this is the about me route THIS IS WORKING
// 'peeps' is whatever gets passed in from the mongodb
app.get('/api/profile', function aboutMe(req,res){
  
  res.json(myInfo);
  //db.Person.find({}, function(err, peeps){
   // console.log(peeps);//goes to the terminal
    //res.json(peeps); // goes to whomever sent the request

});

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My personal Info"},
       {method: "GET", path: "/api/movies", description: "Get All movies"},  
      {method: "GET", path: "/api/movies/:id", description: "get one movie by id"},
      {method: "PUT", path: "/api/movies/:id", description: "Update a movie"},
      {method: "POST", path: "/api/movies", description: "Add a new Movie"},
      {method: "Delete", path: "/api/movies", description: "Delete a Movie"}
       // CHANGE ME
    ]
  });
});

//route route to the directory
// this is working 
app.get('/', function(req,res){
  res.sendFile('views/index.html' , {root: __dirname});
});

//get all MOVIES  //THIS IS WORKING
app.get('/api/movies', function (req,res){
  db.Movie.find({}, function(err, finefilms){
    //console.log(finefilms);
    res.json(finefilms);
  });
  
  //db.Person.find(function(err, person){
    //if (err){return console.log("index err: "+ err);}
      //res.json(person);
  });


// GET MOVIE BY ID!!! ///THIS iS WORKING
app.get('/api/movies/:id', function(req,res){
  db.Movie.findOne({_id: req.params.id}, function(err, movID){
    res.json(movID);
  });

});
//get by id
// app.get('/api/persons/:id', function (req, res){
//   console.log('one people show', req.params);
//   for(var i = 0; i < personArray.length; i++){
//     if (persons[i]._id === req.params.id){
//       res.json(persons[i]);
//       break;
//     }
//   }
// });

//post a new mov
app.post('/api/movies', function(req,res){
  
  var postMov = new db.Movie
    ({
    _id: req.body.id,
    name: req.body.name,
    rating: req.body.rating
      
    });
      //res.json(req.body.id); // .id cant have underline

    postMov.save(function(err, mov){
          res.json(mov+"was added");

  });
  
});

//update a mov
app.put('/api/movies/:id', function(req,res){
  console.log ("put route");
  db.Movie.findOne({_id: req.params.id}, function(err, mov){
    console.log(Movie);
    Movie.id = req.body.id;
    Movie.name = req.body.name;
    Movie.rating = req.body.rating;

  });
  Movie.save(function(err, mov){
    console.log(mov);
    console.log("updated ", movie.id);
  });
      //res.json(req.body.id); // .id cant have underline

    postMov.save(function(err, mov){
          res.json(mov+"was added");

  });
  
});



///PUT: udate a movie after finding by id
/// DELETE ROUTE WORKING, removes movie from
app.delete('/api/movies/:id', function(req,res){
  console.log('move deleted'+ req.params);
  var deleteId = req.params.id;
  db.Movie.findOneAndRemove({_id: deleteId}, function(err, cut){
    res.json(cut+"was taken out");
  });
});



//delete
// app.delete('api/movies/:id', function (req,res){
//   console.log('person delete', req.params);
//   var personId = req.params.id;

//    var deletePersonIndex = persons.findIndex(function(element, index) {
//     return (element._id === parseInt(req.params.id)); //params are strings
//   });
//   console.log('deleting person with index', deleteBookIndex);
//   var personToDelete = persons[deletePersonIndex];
//   persons.splice(deletePersonIndex, 1);
//   res.json(personToDelete);
// });



/**********
 * SERVER *
 **********/

// listen on port 9000
app.listen(process.env.PORT || 9000, function () {
  console.log('Express server is up and running on http://localhost:9000/');
});
