'use strict';
/**
 * Resource class
 * @module Resource
 */

const schema = require('./resource-schema.js');
const Model = require('../mongoose-model.js');

class Resource extends Model {
  constructor() {
    super(schema);
    this.keywords = [];
  }

  async getRandom(){
    let count = await this.count();
    let random = Math.floor(Math.random()*count);
    let resource = await this.findOne().skip(random);
    return resource;

  }
}


module.exports = Resource;