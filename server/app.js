'use strict';

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var config = require("./configurations/config")

//STARTING EXPRESS APP
var APP = express();

//STARTING MONGODB CONNECTION
mongoose.connect(config.Mongo.uri);
mongoose.connection.on('error', function() {
  console.log('Nao foi possivel se conectar com o BD');
  process.exit(-1);
});

var SERVER = require('http').createServer(APP);
require('./configurations/express')(APP);

require('./configurations/routes')(APP);

SERVER.listen(config.Server.port, config.Server.address, function() {
  console.log('Node Server its running on http://'
+config.Server.address+':'+config.Server.port);
});
