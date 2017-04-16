var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema ({
	_id: String,
	name: String,
	rating: String
});

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
//exports.Movie = Movie;
//exports.MovieSchema= MovieSchema;