var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('./mongo');
//var ognom = require('./ognom')
var app = express();
	 
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json())

	app.get('/normal_user/test', function (req, res) {
		  res.send('Hello World')
	})
	app.post('/normal_user/get_point', function (req, res) {
		  mongo.Get_point(req.body.account,res);
	})
	app.post('/normal_user/update', function(req, res) {
		    mongo.Update_point(req.body.account,req.body.password,req.body.point,res);
	});
	app.post('/normal_user/create', function(req, res){
		res.send('hello wordl');		
		if(req.body.account!=null&&req.body.account!="")
			mongo.Create_account(req.body.account,req.body.password,res);
	})
	app.post('/normal_user/is_existed',function(req,res){
		mongo.Is_existed(req.body.account,res);	
	})
/*
	app.get('/firm/test', function (req, res) {
		res.send('Hello World')
	})
	app.post('/firm/get_point', function (req, res) {
		ognom.Get_point(req.body.account,res);
	})
	app.post('/firm/update', function(req, res) {
		ognom.Update_point(req.body.account,req.body.password,req.body.point,res);
	});
	app.post('/firm/create', function(req, res){
		ognom.Create_account(req.body.account,req.body.password);
	})
 */
app.listen(4000)
