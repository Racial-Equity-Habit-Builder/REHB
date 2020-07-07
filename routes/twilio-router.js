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
const ResourceModel = require('../middleware/models/resource/resource-model.js');
const resource = new ResourceModel();


router.post('/', handleText);

function handleText(req, res) {
  const twiml = new MessagingResponse();
  let command = req.body.Body;


  if (command.toLowerCase() === 'signup') {
    let userDetails = {phoneNumber: req.body.From};
    user.create(userDetails)
    resource.getOne()
    .then(result => {
      let action = result.url;
      console.log('this is the action:', action);
      return action;
    })
    twiml.message('Thanks for signing up');
   
  
    // twiml.message(`Thanks for signing up. Here\'s your first action: ${action}. Respond with DONE when you\'ve completed it.`);
  
    
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