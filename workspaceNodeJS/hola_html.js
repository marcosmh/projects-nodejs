var http = require("http");
	fs = require("fs");


/*
http.createServer(function(req, res) {		
	fs.readFile("./index.html",function(err, html){
		res.write(html);
		res.end();
	});
}).listen(8080);
*/



http.createServer(function(req, res) {		
	fs.readFile("./index.html",function(err, html){		
		res.writeHead(200,{"Content-Type" : "text/json"});
		res.write(JSON.stringify({nombre: "marcos",username :"mahm"}));
		res.end();
	});
}).listen(8080);
