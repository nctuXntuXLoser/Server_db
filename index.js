var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('./mongo');
var app = express();
	 
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json())

	app.get('/test', function (req, res) {
		  res.send('Hello World')
	})
	app.post('/get_point', function (req, res) {
		  mongo.Get_point(req.body.account,res);
	})
	app.post('/update', function(req, res) {
		    mongo.Update_point(req.body.account,req.body.password,req.body.point,res);
	});
	app.post('/create', function(req, res){
		mongo.Create_account(req.body.account,req.body.password);
	})

 
app.listen(4000)
