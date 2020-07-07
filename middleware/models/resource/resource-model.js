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
    let resources = await this.get();
    let count = await resources.count;
    let random = await Math.floor(Math.random()*count);
    let resource = await this.schema.findOne().skip(random);
    return resource;
  }
}

module.exports = Resource;