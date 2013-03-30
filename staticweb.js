var express = require('express')
var config = require('./config.json')

var app = express()


//Heroku compliant method of getting port
var port = process.env.PORT || config.port
app.listen(port, function() {
	console.log("Listening on " + port)
});