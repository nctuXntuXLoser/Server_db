var firm_user = require('./firm_module');
module.exports = {	
	Update_point:function(acc,pass,poi,res){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		firm_user.update({ account: acc}, {$set: { point: poi }},function(err){
			if(err)
				console.log('fail');
			else
				console.log('success');		
		});	
		mongoose.connection.close();
		res.end('success');
	},
	Create_account:function(acc,pass){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		var insert = new firm_user({ account: acc,password:pass, point: 0 });
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
		firm_user.find(function(err, firm_users) {
			for (var index in firm_users) {
				var usr = firm_users[index];
				console.log(usr);
			}
		});
		mongoose.connection.close();
	},
	submit_advertisement:function(acc,pass,ad_url){
		
	},	
	Get_point:function(acc,res){	
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		firm_user.find({ account: acc }, function(err, firm_users) {
			res.end(firm_users[0].account+String(firm_users[0].point));
		});
		mongoose.connection.close();
	}
	
}




















