var express = require('express');
var app = express();
var PORT= 3000;

var middleware ={
	requireAuthentication: function (req,res,next){
		console.log('Private route hit!');
		next();
	},
	logger: function (req,res,next){
		console.log('Request: '+ req.method + ' at url: ' + req.originalUrl + ' on  '+ new Date().toString());
		next();
	}
};

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
