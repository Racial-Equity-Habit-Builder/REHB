'use strict';
/**
 * User class
 * @module User
 */

const schema = require('./user-schema.js');
const Model = require('../mongoose-model.js');

<<<<<<< HEAD
class Resource extends Model {
    constructor() {
        super(schema);
        this.streak = 0;
        this.completed = [];
        this.preferences = [];
        this.settings = [];
    }
    incrementStreak(_id){
        let update = {streak: 1}; 
        const opts = {new : true};
        this.schema.findOneAndUpdate(_id, update, opts);
    }
    // TODO: Class method that, upon confirmation from twilio, updates the user's streak +1 or resets to zero
    actionTaken(data) {
        if(data) {
            incrementStreak(_id); // what we pass in is TBD, but this should 
        } else {
            resetStreak(_id);
        }
    }
    // TODO: need a method that will push a completed resource ID into the users completed array.
    complete(data) {
        let finishedTask = this.schema.get(data.id);
        this.completed.push(finishedTask);
    }

    // TODO: functionality to make sure user doesn't repeat tasks
    checkCompleted(data) {
        let finishedTask = this.schema.get();
        finishedTask.results.forEach(value => {
            if(value._id === _id) {
                return true;
            } else {
                return false;
            }
        })
    }
    // Method to reset to streak if user fails
    resetStreak(_id) {
        let update = {streak : 0};
        const opts = {new : true};
        this.schema.findOneAndUpdate(_id, update, opts);
    }
=======
class Users extends Model {
  constructor() {
    super(schema);

  }

  incrementStreak(_id){
    let update = {streak: 1}; 
    const opts = {new : true};

    this.schema.findOneAndUpdate(_id, update, opts);
  }

>>>>>>> 03cbeb5464ccb83dabd3f8c8adaeb0fabd217deb
}

module.exports = Users;