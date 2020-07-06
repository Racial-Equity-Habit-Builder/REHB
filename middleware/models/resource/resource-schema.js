'use strict';

/**
 * Categories schema
 * @module resource-schema
 */

const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  url: {type: String, required: true},
  type: {type: String, required:true},
  keywords: {type: Array},
});

module.exports = mongoose.model('resource', resourceSchema);