var express = require("express");
var path = require("path");
var app = express();


app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
})
