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
const { NetworkContext } = require('twilio/lib/rest/supersim/v1/network');

router.post('/', handleText);

async function handleText(req, res) {
  const twiml = new MessagingResponse();
  let command = req.body.Body;

  if (command.toLowerCase() === 'signup') {
    let userDetails = { phoneNumber: req.body.From };

    let current = await user.exists(userDetails);
    if (current === false) {
      await user.create(userDetails);
      twiml.message('Thanks for signing up!');
      twiml.message('Share on twitter: ‘https://twitter.com/intent/tweet?text=Starting%20the%2021-Day%20Challenge!%20https://www.eddiemoorejr.com/21daychallenge/’');

      let action = await resource.getRandom();

      twiml.message(`Get started with your first action: ${action.url}. Text back DONE when you\'ve completed it.`);
      await user.complete(req.body.From, action._id);

    } else {
      twiml.message('you are already signed up');
    }

  }

  if (command.toLowerCase() === 'done') {

    let today = new Date().getTime();
    today = Math.floor((today / 1000) / 60);//turning into minutes
    let success = await user.dateCheck(today, req.body.From);
    if (success) {
      await user.incrementStreak({ phoneNumber: req.body.From });
      let streak = await user.getStreak(req.body.From);
      if (streak === 21) {
        twiml.message('Congratulations! You\'ve completed the 21 day habit challenge!');
        twiml.message('Share on twitter: ‘https://twitter.com/intent/tweet?text=I%20completed%20the%2021-Day%20Challenge!%20https://www.eddiemoorejr.com/21daychallenge/’');
      }
      if (streak != 21) {
        twiml.message(`Great job! Your current streak is ${streak} days. Keep it going.`);
      }
    } else {
      twiml.message('You missed a day so your streak starts over.');
      user.resetStreak({ phoneNumber: req.body.From });
      user.resetCompleted({ phoneNumber: req.body.From });
    }
  }

  if (command.toLowerCase() === 'options') {
    twiml.message('The options are SIGNUP, DONE, OPTIONS, and LEAVE.');
  }

  if (command.toLowerCase() === 'leave') {
    let phoneNumber = req.body.From;
    await user.deleteUser(phoneNumber);
    twiml.message('We will miss you! Text \'signup\' anytime to start again');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
}

module.exports = {
  router,
  handleText,
};
