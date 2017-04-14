var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema ({
	name: String
});

var Movie = mongoose.model('Movie', MovieSchema);
exports.Movie = Movie;
exports.MovieSchema= MovieSchema;