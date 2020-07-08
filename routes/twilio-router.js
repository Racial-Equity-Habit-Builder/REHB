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
var cron = require('node-cron');

router.post('/', handleText);

async function handleText(req, res) {
  const twiml = new MessagingResponse();
  let command = req.body.Body;

  if (command.toLowerCase() === 'signup') {
    let userDetails = { phoneNumber: req.body.From };
    user.create(userDetails)
    twiml.message('Thanks for signing up');

    let action = await resource.getRandom();

    console.log('this is the action.url:', action.url);
    twiml.message(action.url);
  }

  if (command.toLowerCase() === 'done') {
    // get the user by phoneNumber, and get the _id
    let userDetails = { phoneNumber: req.body.From };
    // let currentUser = UserModel.findOne(userDetails);
    console.log(userDetails);
    //TODO: how to access one user by phonenumber, then use the _id to update the document
    // increment streak, checking 24 hour timeline
      // TODO:  user.incrementStreak();
    // check against the content you specifically completed??
    // 
    twiml.message('Great job');
  }

  if (command.toLowerCase() === 'options') {
    twiml.message('The options are SIGNUP, DONE, OPTIONS, ALLDONE, and STOP.');
  }

  if (command.toLowerCase() === 'apples') {
    let phoneNumber = req.body.From;
    user.deleteUser(phoneNumber); 
    //TODO: be able to actually delete a user
    twiml.message('We will miss you! Text \'signup\' anytime to start again');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
};

module.exports = router;

  // LOCALHOST
  // twilio phone-numbers:update "+12062228429" --sms-url="http://localhost:3000/sms"


  // ON HEROKU
  // twilio phone-numbers:update "+12062228429" --sms-url="https://rehab-cf.herokuapp.com/sms"