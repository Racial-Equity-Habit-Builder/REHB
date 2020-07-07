'use strict';
/**
 * Resource class
 * @module Users
 */

const schema = require('./user-schema.js');
const Model = require('../mongoose-model.js');

class Users extends Model {
  constructor() {
    super(schema);

  }

  incrementStreak(_id){
    let update = {streak: 1}; 
    const opts = {new : true};

    this.schema.findOneAndUpdate(_id, update, opts);
  }

}

module.exports = Resource;