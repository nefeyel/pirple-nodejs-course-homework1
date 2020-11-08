/*
 * Please create a simple "Hello World" API. Meaning:

 * 1. It should be a RESTful JSON API that listens on a port of your choice.

 * 2. When someone sends an HTTP request to the route /hello, you should return a welcome message, 

 * in JSON format. This message can be anything you want. 
 
 */

// Dependences
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

var port = 3000;
var responseObject = {
  message: 'Hello World'
} 

// Instantiate http server
var httpServer = http.createServer(function(req, res) {
	  // Parse the url
  var parsedUrl = url.parse(req.url, true);  

  // Get the path
  var path = parsedUrl.pathname;
  
  if(path === '/hello') {    
    var stringResponseObject = JSON.stringify(responseObject);

    // Return the response
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(stringResponseObject);
    console.log("Returning this response: ",stringResponseObject);
  }   
});

// Start the http server
httpServer.listen(port,function(){
  console.log("The http server is listening on port " + port);
});

