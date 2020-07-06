'use strict';
/**
 * Resource class
 * @module Resource
 */

const schema = require('./user-schema.js');
const Model = require('../mongooose-model.js');

class Resource extends Model {
  constructor() {
    super(schema);
    this.streak = 0;
    this.completed = [];
    this.preferences = [];
    this.settings = [];
  }
}

module.exports = Resource;