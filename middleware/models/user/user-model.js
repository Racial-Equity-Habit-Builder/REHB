'use strict';
/**
 * User class
 * @module User
 */

const schema = require('./user-schema.js');
const Model = require('../mongoose-model.js');

class User extends Model {
  constructor() {
    super(schema);
    this.streak = 0;
    this.completed = [];
    this.preferences = [];
    this.settings = [];
  }
}

module.exports = User;