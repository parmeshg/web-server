var express = require('express');
var app = express();
var PORT= 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
//application level middleware
//app.use(middleware.requireAuthentication);

//route level middleware
app.get('/about',middleware.requireAuthentication,function (req,res){
	res.send('About us');
});

/*app.get('/',function (req,res){
	res.send('Hello Express!');
});*/

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log('Express server is started on port '+PORT)
});
