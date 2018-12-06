var http = require("http"),
	fs = require("fs"),
	parser = require("./params_parser.js"),
	renderiza = require("./render_view.js");

var p = parser.parse;
var r = renderiza.renderiza;

	http.createServer(function(req,res){

		if(req.url.indexOf("favicon.ico") > 0) { return; }

		fs.readFile("./params_form.html",function(err,html){
			var html_string = html.toString();
			var variables = html_string.match(/[^\{\}]+(?=\})/g);			
			var nombre = "";
			var parametros = p(req);
			html_string = r(html_string,variables,parametros);	
			res.writeHead(200,{"Content-Type" : "text/html"})
			res.write(html_string);
			res.end();
		});
	}).listen(8080);