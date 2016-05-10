var fs = require("fs");
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
var mongoose = require('mongoose');
var port = process.env.PORT || 5000;

// connection call to connect to mongo lab
mongoose.connect('mongodb://admin:carladmin@ds019950.mlab.com:19950/blog-db');

// schema for the blog
var BlogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  comments: [String],
  dateCreated: Date
});

// model
var Blog = mongoose.model('Blog', BlogSchema);

// create a dummy blog object
var DummyBlog = new Blog({
  title: "Lol",
  content: "test",
  comments: [],
  dateCreated: new Date()
});

DummyBlog.save();

app.use(express.static(__dirname + '/'));

app.get('/blog?s', function(express, res) {
    fs.readFile(__dirname + '/blogs/index.html', 'utf8', function(err, text) {
        res.send(text);
    });
});

app.get('/*', function(express, res) {
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text) {
        res.send(text);
    });
});

server.listen(port, function() {
    console.log('Node app is running on port', port);
});
