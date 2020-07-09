'use strict';

/**
 * Entry point into our server and connection to Mongo
 * @module Index 
 * @returns "Proof of Life"
 */

// NPM/MODULE REQUIREMENTS
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server.js');
const sendDailyAction = require('./lib/send_sms.js');


// ENVIRONMENTAL VARIABLES
const PORT = process.env.PORT || 3000;


// MONGOOSE CONNECTION TO DB
mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// ESTABLISHING DB AND RESPONSING WITH LIFE
const db = mongoose.connection;
db.on('open', () => {
  console.log('Connected to Mongo DB');
});

// STARTING SERVER
server.start(PORT);

// SEND DAILY ACTION
sendDailyAction();