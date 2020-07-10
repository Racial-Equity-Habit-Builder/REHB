'use strict';

/**
 * Basic Auth Middleware
 * @module basic-auth
 * @function authMiddleware Authenticates user based on hashed password 
 * @param {Object} req Passed in from request 
 * @next  Passes through if user is authenticated
 */

require('dotenv').config();
const base64 = require('base-64');
const UserModel = require('../middleware/models/user/user-model.js');

const ADMIN_SECRET = process.env.ADMIN_SECRET;

module.exports = async function basicAuth(req, res, next) {
  let [authType, authString] = req.headers.authentication.split(' ');
  let password = base64.decode(authString);

  console.log(authString);
  if (password === ADMIN_SECRET) {
    next();
  } else {
    next('Permission Denied');
  }
  return 0;
}