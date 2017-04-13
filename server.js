// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.listen(process.env.PORT || 3000);

/************
 * DATABASE *
 ************/

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
app.get('/api/profile', function aboutMe(req,res){
  //a
  db.Person.find({}, function(err, persons){
    console.log(persons);//goes to the terminal
    res.json(persons); // goes to whomever sent the request
  });

//get all the movies
app.get('/api/movies', function getAllMovies(err, res){
  db.Movie.find({}, function(err,persons){
    console.log(movie);
  });
});

  
});

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  });
});

//route route to the directory
// this is working 
app.get('/', function(req,res){
  res.sendFile('views/index.html' , {root: __dirname});
});

//get all people
app.get('/api/persons', function (req,res){
  //send all people as a JSON response
  console.log('people index');

  db.Person.find(function(err, Person){
    if (err){return console.log("index err: "+err);}
      res.json(person);
  });
});

/*
//get by id
app.get('/api/persons/:id', function (req, res){
  console.log('one people show', req.params);
  for(var i = 0; i < personArray.length; i++){
    if (persons[i]._id === req.params.id){
      res.json(persons[i]);
      break;
    }
  }
});

//put


//post 
app.post('api/persons/:person_id')

//delete
app.delete('api/persons/:id', function (req,res){
  console.log('person delete', req.params);
  var personId = req.params.id;

   var deletePersonIndex = persons.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('deleting person with index', deleteBookIndex);
  var personToDelete = persons[deletePersonIndex];
  persons.splice(deletePersonIndex, 1);
  res.json(personToDelete);
});

*/

/**********
 * SERVER *
 **********/

// listen on port 9000
app.listen(process.env.PORT || 9000, function () {
  console.log('Express server is up and running on http://localhost:9000/');
});
