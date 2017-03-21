'use strict';

var express = require('express');
var controller = require('../controllers/user.controller');

var ROUTER = express.Router();

ROUTER.get('/', controller.list);
ROUTER.get('/:id', controller.getByID);
ROUTER.post('/', controller.create);
ROUTER.put('/:id', controller.edit);
ROUTER.patch('/:id', controller.edit);
ROUTER.delete('/:id', controller.delete);

module.exports = ROUTER;
