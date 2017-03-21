/**
 * Express Configurations
*/

'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(express.static(path.join('', 'client')));
  app.set('appPath', path.join('', 'client'));

};
