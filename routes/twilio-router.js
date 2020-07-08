'use strict';

/**
 * Twilio Router module
 * @module router
 */

const express = require('express');
const router = express.Router();
const { urlencoded } = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
router.use(urlencoded({ extended: false }));
const UserModel = require('../middleware/models/user/user-model.js');
const user = new UserModel();
const ResourceModel = require('../middleware/models/resource/resource-model.js');
const { twiml } = require('twilio');
const resource = new ResourceModel();

router.post('/', handleText);

async function handleText(req, res) {
  const twiml = new MessagingResponse();
  let command = req.body.Body;

  // sign up handler
  if (command.toLowerCase() === 'signup') {
    let userDetails = { phoneNumber: req.body.From };
    user.create(userDetails)
    twiml.message('Thanks for signing up');

    let action = await resource.getRandom();
    console.log('this is the action.url:', action.url);
    twiml.message(action.url);
  }

  if (command.toLowerCase() === 'done') {
    twiml.message('Great job');
  }

  if (command.toLowerCase() === 'options') {
    twiml.message('The options are SIGNUP, DONE, OPTIONS, and STOP.');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
}

module.exports = {
  router,
  handleText,
};