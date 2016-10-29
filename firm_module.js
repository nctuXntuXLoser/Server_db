var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	   account:String,
	   password:String,
	   point:Number,
	   ads:[{name: String,ads_url : String,history :{view_log : [date : Date],total_click:Number}}]
});
module.exports = mongoose.model('firm_user', userSchema);        
