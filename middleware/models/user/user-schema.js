'use strict';

/**
 * Categories schema
 * @module user-schema
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: {type: String, required: true},
  role: {type: String, default: 'user'},
  streak: {type : Number, default: 0},
  completed: {type: Array, default: []},
  preferences: {type: Array, default: []},
  settings: {type: Array, default: []},
});

module.exports = mongoose.model('user', userSchema);