var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema ({
	name: String
});


var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;