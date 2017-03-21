'use strict';

var USER = require('../nonRelationalDAO/user.model');

// List All
exports.list = function(req, res) {
  USER.find(function (err, users) {
    return res.status(200).json(users);
  });
};

// Get By ID
exports.getByID = function(req, res) {
  USER.findById(req.params.id, function (err, user) {
    if (!user) {
      return res.status(404);
    }
    return res.json(user);
  });
};

// Create
exports.create = function(req, res) {
  USER.create(req.body, function(err, user) {
    return res.status(201).json(user);
  });
};

// Edit
exports.edit = function(req, res) {
  // var consulta = {"_id": req.body._id};
  // if(req.body._id) {
  //   delete req.body._id;
  // }
  // var mudancas = req.body;
  // var opcoes = {new: false};
  // USER.findOneAndUpdate(consulta, mudancas, opcoes, function(err, USER) {
  //   return res.status(200).json(USER);
  // });
};

// Delete
exports.delete = function(req, res) {
  USER.findById(req.params.id, function (err, user) {
    USER.remove(function(err) {
    });
  });
};
