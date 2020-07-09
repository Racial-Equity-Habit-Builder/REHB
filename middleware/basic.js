'use strict';

/**
 * Basic Auth Middleware
 * @module basic-auth
 * @function basicAuth Authenticates user based on hashed phone number and role
 * @param {String}  req.headers.authorization 
 * @next  Passes through if user is authenticated
 */
// const permissionDenied = Ashley;

const base64 = require('base-64');
const UserModel = require('../middleware/models/user/user-model.js');
const user = new UserModel();

module.exports = async function basicAuth(req, res, next) {

  let [authType, authString] = req.headers.authorization.split(' ');
  let [phone, role] = base64.decode(authString).split(':');
  let payload = { phoneNumber: phone };

  user.schema.findOne(payload, function (err, Obj) {
    let newUser = Obj;

    // console.log('user', newUser);

    if (newUser.role === 'admin') {
      next();
    } else {
      next('Permission Denied');
    }
    return 0;
  });
}