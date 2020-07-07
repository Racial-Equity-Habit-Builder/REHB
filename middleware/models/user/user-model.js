'use strict';
/**
 * User class
 * @module User
 */

const schema = require('./user-schema.js');
const Model = require('../mongoose-model.js');

class Resource extends Model {
    constructor() {
        super(schema);
        this.streak = 0;
        this.completed = [];
        this.preferences = [];
        this.settings = [];
    }
    // TODO: Class method that, upon confirmation from twilio, updates the user's streak +1 or resets to zero
    incrementStreak(data) {
        if(data) {
            this.streak++;
        } else {
            this.streak = 0;
        }
    }

    complete(data) {
        this.completed.push(data.id)
    }
    // TODO: need a method that will push a completed resource ID into the users completed array.
    checkCompleted(data) { 
        this.completed.forEach(id => {
            if(data.id === id) {
                checkCompleted;
            } else {
                return false;
            }
        })
    }
}

module.exports = User;