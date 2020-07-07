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
        this.streak = 0;
        this.completed = [];
        this.preferences = [];
        this.settings = [];
    }
    incrementStreak(_id) {
        let update = {streak: 1}; 
        const opts = {new : true};
        this.schema.findOneAndUpdate(_id, update, opts);
    }
    // TODO: Class method that, upon confirmation from twilio, updates the user's streak +1 or resets to zero
    actionTaken(data) {
        if(data) {
            incrementStreak(data._id); // what we pass in is TBD, but this should 
        } else {
            resetStreak(data._id);
        }
    }
    // TODO: need a method that will push a completed resource ID into the users completed array.
    complete(data) {
        let finishedTask = this.schema.get(data._id);
        this.completed.push(finishedTask);
    }
    // TODO: functionality to make sure user doesn't repeat tasks
    checkCompleted(data) {
        let taskList = this.schema.get();
        taskList.results.forEach(task => {
            if(task._id === data._id) {
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
}

module.exports = Users;