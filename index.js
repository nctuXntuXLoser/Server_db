var express = require('express')
var app = express()
	 
	app.get('/get', function (req, res) {
		  res.send('Hello World')
	})
	app.post('/account', function(req, res) {
		    console.log(req.body.account);
		    console.log(req.body.password);
	});
	app.post('/create', function(req, res){
		
	})
 
app.listen(4000)
