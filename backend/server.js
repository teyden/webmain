var express = require('express');
var app = express();

app.use('/',express.static(__dirname+".."));

app.use('/resume',express.static('../resume.html'));
app.use('/resumepdf',express.static('../resume.pdf'));

var server = app.listen(3000,function(){
	console.log('Listening on port 3000')
});
