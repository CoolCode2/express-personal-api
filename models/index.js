var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");
					///makes db called personal-api

 
//module.exports.Person = require("./myinfo.js");
//module.exports.Pet = require("./Pet.js");
module.exports.Movie = require("./Movie.js");
