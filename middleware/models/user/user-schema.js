'use strict';

/**
 * Categories schema
 * @module user-schema
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String},
  role: {type: String},
  phoneNumber: {type: String, require: true},
  email: {type: String},
  streak: {type : Number},
  completed: {type: Array},
  preferences: {type: Array},
  settings: {type: Array},
});

module.exports = mongoose.model('user', userSchema);