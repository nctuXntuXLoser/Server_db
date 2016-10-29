var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	  url: String
});
module.exports = mongoose.model('advertisement_pool', userSchema);        
