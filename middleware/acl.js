'use strict';

/**Access Control List
 * @module permissions
 */

const UserModel = require('../middleware/models/user/user-model.js');
const User = new UserModel();

/**
 * Curried function - middleware - checks for permission to access a route based on user's role
 * @param {string} capability The type of permission necessary to pass the middleware requirement
 * @next Passes through if user has role which allows for the requested capability
 */

const permissions = (capability) => async(request, response, next) => {
  console.log(request.headers);

  // let formatted = await User.get(request.body.phoneNumber);
  // console.log(formatted);

  // let user = new UserModel();
  // console.log(user);

  // user.setRole(formatted.role);

  // let hasPermission = await user.can(capability);
  // if (hasPermission) {
  //   next();
  // } else {
  //   next('Permission Denied');
  // }
}

module.exports = permissions;
