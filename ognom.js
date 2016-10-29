var firm_user = require('./firm_module');
module.exports = {	
	Add_in_pool:function(ur,res){
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		var insert = new firm_user({ url:ur});
		insert.save(function (err) {
			if (err) {
				console.log('Failed'); 
				res.end('failed');				
				return; 
			} 
			console.log('Saved');
			res.end('saved'); 
		});
		mongoose.connection.close();
	},
	random_ad:function(res){	
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/server');
		firm_user.find(function(err, firm_users) {
			var size = firm_users.length;
			var index = Math.floor(Math.random()*size);				
			res.end(firm_users[index].url);
			console.log(firm_users[index].url);
		});
		mongoose.connection.close();
	}
	
}




















