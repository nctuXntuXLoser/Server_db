var normal_user = require('./user_module');
module.exports = {	
	Update_point:function(acc,pass,poi,res){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		normal_user.update({ account: acc}, {$set: { point: poi }},function(err){
			if(err)
				console.log('fail');
			else
				console.log('success');		
		});
		console.log(poi);
		console.log(acc);	
		mongoose.connection.close();
		res.end('success');
	},
	Create_account:function(acc,pass){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		var insert = new normal_user({ account: acc,password:pass, point: 0 });
		insert.save(function (err) {
			if (err) {
				console.log('Failed'); 
				return; 
			} 
			console.log('Saved'); 
		});
		mongoose.connection.close();
	},
	Get_all:function(){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		normal_user.find(function(err, normal_users) {
			for (var index in normal_users) {
				var usr = normal_users[index];
				console.log(usr);
			}
		});
		mongoose.connection.close();
	},
	Get_point:function(acc,res){	
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		normal_user.find({ account: acc }, function(err, normal_users) {
			res.end(normal_users[0].account+String(normal_users[0].point));
		});
		mongoose.connection.close();
	}
	
}




















