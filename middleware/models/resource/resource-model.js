'use strict';
/**
 * Resource class
 * @module Resource
 */

const schema = require('./resource-schema.js');
const Model = require('../mongooose-model.js');

class Resource extends Model {
  constructor() {
    super(schema);
    this.keywords = [];
  }
}

module.exports = Resource;