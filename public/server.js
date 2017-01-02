var fs = require("fs");
var express = require('express'),
    app = module.exports = express();
var port = process.env.PORT || 5000;

app.listen(port);
console.log("Node app is running on port " + port + "!");

app.use(express.static(__dirname + '/'));

app.get('/*', function(express, res) {
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text) {
        res.send(text);
    });
});

/** Live Reload **/
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + '/');
