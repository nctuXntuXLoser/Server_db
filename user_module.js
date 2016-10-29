var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	   account:String,
	   password:String,
	   point:Number
});
module.exports = mongoose.model('normal_user', userSchema);        
