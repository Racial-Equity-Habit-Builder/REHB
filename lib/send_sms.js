'use strict';

require('dotenv').config({path: '../.env'});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const UserModel = require('../middleware/models/user/user-model.js');
const user = new UserModel();
const ResourceModel = require('../middleware/models/resource/resource-model.js');
const resource = new ResourceModel();
var cron = require('node-cron');

// //TEMP FOR DEV WORK
// const mongoose = require('mongoose');
// const Users = require('../middleware/models/user/user-model.js');
// mongoose.connect(process.env.MONGO_ATLAS_URI, {
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });
// const db = mongoose.connection;
// db.on('open', () => {
//   console.log('Connected to Mongo DB');
// });
// //END OF TEMP


let task = cron.schedule('*/5 * * * *', () => {
  sendDailyMessage();
});
task.start();





async function sendDailyMessage() {
  let allUsers = await user.get()
  allUsers = allUsers.results;
  allUsers.forEach(async user => {
    let action = await resource.getRandom();
    while (user.completed.includes(action._id)) {
      action = await resource.getRandom();
    }
    client.messages
    .create({
      body: `Here is your daily action: ${action.url}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: user.phoneNumber
    })
   .then(message => console.log(message.sid));
  })
}


module.exports = sendDailyMessage;