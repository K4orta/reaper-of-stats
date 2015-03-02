'use strict';

var express = require('express'),
	compression = require('compression');

var app = express();
require('./src/shared/init');

app.use(compression());
app.set('views', './public/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {reactOutput: ''});
})

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
	console.log("Started Reaper on port " + port);
});