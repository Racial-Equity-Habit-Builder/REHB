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
  // let timer = cron.schedule(
  //   '* * * * *', ()=> {
  //     console.log('timer stuff is happening')
  //   }, {scheduled: false}
  // );
  

  if (command.toLowerCase() === 'signup') {
    let userDetails = { phoneNumber: req.body.From };
    let current = await user.exists(userDetails);
    if(current === false) {
      await user.create(userDetails);
      twiml.message('Thanks for signing up');
  
      let action = await resource.getRandom();
  
      console.log('this is the action.url:', action.url);
      twiml.message(action.url);
      await user.complete(req.body.From, action._id);
      
      
      
      
    }else {
      console.log('already signed up');
      twiml.message('you are already signed up');
    }       
  }
  

  if (command.toLowerCase() === 'done') {
       
    let today = new Date().getTime();
    today = Math.floor((today/1000)/60);//turning into minutes
    let success = await user.dateCheck(today, req.body.From);
    if (success) {
      twiml.message('Great job');
      user.incrementStreak({ phoneNumber: req.body.From });
    }else {
      twiml.message('You missed a day so your streak starts over.');
      user.resetStreak({ phoneNumber: req.body.From });
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


  // LOCALHOST
  // twilio phone-numbers:update "+12062228429" --sms-url="http://localhost:3000/sms"


  // ON HEROKU
  // twilio phone-numbers:update "+12062228429" --sms-url="https://rehab-cf.herokuapp.com/sms"

