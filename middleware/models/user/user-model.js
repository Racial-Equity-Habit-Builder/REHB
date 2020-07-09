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
  // for basic auth
  setRole(role) { this.role = role };

  //TODO: Get these working in just the way we need them to work
  
  incrementStreak(number){
    let update = {$inc: {streak: 1}}; 
    this.schema.findOneAndUpdate(number, update, function(err, Obj) {console.log(Obj);});
  }

  resetStreak(number){
    let update = {$set: {streak: 1}}; 
    this.schema.findOneAndUpdate(number, update, function(err, Obj) {console.log(Obj);});
  }
  
  //FIXME: might not need this
  actionTaken(data) {
    if(data) {
      incrementStreak(data._id);
    } else {
      resetStreak(data._id);
    }
  }

  complete(number, action) {
    let payload = { phoneNumber : number };
    let date = new Date().getTime();
    date = Math.floor((date/1000)/60);//turning into minutes
    let update = { $push: { "completed": action }, $set:{"lastActionTime": date}}; 
    this.schema.findOneAndUpdate(payload, update, function(err, Obj) {console.log(Obj);});
  }

  async dateCheck(date, number){
    let payload = { phoneNumber : number };
    let current = await this.schema.findOne(payload, function(err, Obj) {console.log(Obj);});
    console.log('this is current: ', current);
    
    let timePassed = date - current.lastActionTime;
    console.log('time passed: ', timePassed);
    if (timePassed < 1440) {//1440 is 24 hours
      return true;
    }
    return false;
  }
}

module.exports = Users;