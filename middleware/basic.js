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
let schema = require('./models/user/user-schema.js');
const user = new UserModel();
const ADMIN_SECRET = process.env.ADMIN_SECRET;

module.exports = async function basicAuth(req, res, next) {
 
  let [authType, authString] = req.headers.authorization.split(' ');
  
  let [phone, role] = base64.decode(authString).split(':');
  
  let payload = { phoneNumber : phone };
  
   user.schema.findOne(payload, function(err, Obj) {
    
    let newUser = Obj;
    
    console.log('user', newUser);
    
    if (newUser.role === 'admin') {
      next();
    } else {
      next('Permission Denied');
    }
    return 0;
});

 
}