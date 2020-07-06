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

router.post('/', handleText);

function handleText(req, res) {
  const twiml = new MessagingResponse();
  // console.log(req.body.Body);
  let command = req.body.Body;


  if (command.toLowerCase() === 'signup') {
    twiml.message('Thanks for signing up');
  }

  if (command.toLowerCase() === 'done') {
    twiml.message('Great job');
  }

  if (command.toLowerCase() === 'commands') {
    twiml.message('The command options are SIGNUP, DONE, COMMANDS, and STOP.');
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
};

module.exports = router;