'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name : String,
  email : String,
  address : String,
  phones : [],
  createdOn : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('User',userSchema);
