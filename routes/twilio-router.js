'use strict';

/**
 * Twilio Router module
 * @module router
 */

const express = require('express');
const router = express.Router();
const { urlencoded } = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
router.use(urlencoded({ extended: false}));
const UserModel = require('../middleware/models/user/user-model.js');
const user = new UserModel();

router.post('/', handleText);

function handleText(req, res) {
  const twiml = new MessagingResponse();
  let command = req.body.Body;


  if (command.toLowerCase() === 'signup') {
    twiml.message('Thanks for signing up');
    let userDetails = {phoneNumber: req.body.From};
    user.create(userDetails);
    // console.log(req.body);
  }

  if (command.toLowerCase() === 'done') {
    twiml.message('Great job');
  }

  if (command.toLowerCase() === 'options') {
    twiml.message('The options are SIGNUP, DONE, OPTIONS, and STOP.');
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
};

module.exports = router;