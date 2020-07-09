'use strict';

/**
 * API Router module
 * @module router
 */

const express = require('express');
const router = express.Router();

const getModel = require('../middleware/getModel');
const permissions = require('../middleware/acl.js');
const basicAuth = require('../middleware/basic.js');

router.param('model', getModel);

router.post('/:model', basicAuth, addOne);
router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.put('/:model/:id', basicAuth, updateOne);
router.delete('/:model/:id', basicAuth, /* permissions('delete'), */ deleteOne);

//Using this for addOne that adds a user to the db from the swagger / inspector
const UserModel = require('../middleware/models/user/user-model.js');
const user = new UserModel();

/**
 * addOne - adds one thing to the database
 * @function addOne
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

 // TODO: This function below adds users, the addOne following will add resources. Neither function seems to do both users and resources

// function addOne(request, response) {
//   let userDetails = ({ role: request.body.role, phoneNumber: request.body.phoneNumber })
//   user.create(userDetails);
//   console.log('new user added', userDetails);
//   response.send('new profile added');
// }

function addOne(request, response){
  request.model.create(request.body)
    .then (results => response.send(results))
    .catch(err => response.send(err));
}

/**
 * getAll - gets all of the requested things from the database
 * @function getAll
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

function getAll(request, response){
  request.model.get()
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

/**
 * getOne - gets the requested thing from the database
 * @function getOne
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

function getOne(request, response){
  request.model.get(request.params.id)
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

/**
 * updateOne - updates a thing in the database
 * @function updateOne
 * @param {*} request 
 * @param {*} response 
 * @returns {string}
 */

function updateOne(request, response){
  request.model.update(request.params.id, request.body)
    .then (results => response.send(request.params.id + ' was updated!'))
    .catch(err => response.send(err));

}

/**
 * deleteOne - deletes a thing from the database
 * @function deleteOne
 * @param {*} request 
 * @param {*} response 
 * @returns {string}
 */

function deleteOne(request, response){
  request.model.delete(request.params.id)
    .then (results => response.send(request.params.id + ' was deleted'))
    .catch(err => response.send(err));
}

module.exports = router;
