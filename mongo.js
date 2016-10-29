module.exports = {
	var mongoose = require('mongoose');
//連接資料庫，資料表的名稱為normal_user
	mongoose.connect('mongodb://localhost/server');
// 定義normal_user資料表的模式 
	var normal_user = mongoose.model('normal_user', {
		account: String,
		password: String,
		point: Number
	});
	// 建立新的資料 
	Create_account:function(acc,pass){
		var insert = new normal_user({ account: acc,password:pass, point: 0 });
		insert.save(function (err) {
			// 存入失敗 
			if (err) {
				
				console.log('Failed'); 
				return; 
			}
			// 存入成功 
			console.log('Saved'); 
		});
	}
	Get_all:function(){
		normal_user.find(function(err, normal_users) {
			for (var index in normal_users) {
				var usr = normal_users[index];
				console.log(usr);
			}
		});
	}
	normal_user.find({ account: 'apple' }, function(err, normal_users) {
		for (var index in normal_users) {
		    var stu = normal_users[index];
		    console.log(stu.account);
		}
	});
	// 尋找分數大於60 
	normal_user.find({ point: { $gte: 60 } }, function(err, normal_users) {
		   for (var index in normal_users) {
		    var stu = normal_users[index];
		    console.log(stu.account);
		}
	});
	// 尋找學生的姓名資料 
	normal_user.find({ account: 'apple' }, function(err, normal_users) {
		   for (var index in normal_users) {
		    var stu = normal_users[index];
		    console.log(stu.point);
		}
	});
	normal_user.remove({ account: 'banana' }, function(err) {
		if (err)
		    console.log('Delete Failed '); 
		else 
		    console.log('Deleted');
	});
	mongoose.connection.close();
}




















