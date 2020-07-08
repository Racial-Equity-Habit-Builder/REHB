'use strict';
/**
 * User class
 * @module User
 */

const schema = require('./user-schema.js');
const Model = require('../mongoose-model.js');


class Users extends Model {
  constructor() {
    super(schema);

  }

  //TODO: Get these working in just the way we need them to work
  
  incrementStreak(_id){
    let update = {$inc: {streak: 1}}; 
    const opts = {new : true};
    this.schema.findOneAndUpdate(_id, update, opts);
  }

  resetStreak(_id){
    let update = {$set: {streak: 0}}; 
    const opts = {new : true};
    this.schema.findOneAndUpdate(_id, update, opts);
  }
  
  //FIXME: might not need this
  actionTaken(data) {
    if(data) {
      incrementStreak(data._id);
    } else {
      resetStreak(data._id);
    }
  }

  complete(data) {
    let finishedTask = this.schema.get(data._id);
    this.completed.push(finishedTask._id);

  }
}

module.exports = Users;