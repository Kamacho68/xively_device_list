// Use the environment variable or use a given port
var PORT = process.env.PORT || 8080;

var http = require('http');
var fs = require('fs');

/*server.use(express.static(__dirname + '/public'));*/

/* 
 * xi_device_list.html
 * xi_index.html
 * */
fs.readFile('xi_index.html', function(err, html){
	if(err){
		throw err;
	}
	server = http.createServer(function (req, res){
		res.statusCode = 200;
		res.setHeader('Content-Type','text/html');
		res.write(html);
		res.end();
	});
	// Start the server
	server.listen(PORT, function() {
  		console.log('Server listening on: http://localhost:%s', PORT);
	});
});
