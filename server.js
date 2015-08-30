var fs = require("fs");
var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

 app.get('/', function(express, res) {
        fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
            res.send(text);
        });
    });
	
server.listen(port, function() {
  console.log('Node app is running on port', port);
});	



