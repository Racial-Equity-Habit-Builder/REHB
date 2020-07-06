'use strict';

/**
 * getModel
 * @module getModel
  * @param request
  * @param response
  * @param next
  * @function getModel
  * @returns {object}
  */

const ResourceModel = require('./models/resource/resource-model');
const UserModel = require('./models/user/user-model.js');

function getModel(request, response, next){
  let model = request.params.model;

  switch (model) {
  case 'resource':
    request.model = new ResourceModel();
    next();
    break;
  case 'user':
    request.model = new UserModel();
    next();
    break;
  default:
    next('Invalid Model');
    break;   
  }

}

module.exports = getModel;
