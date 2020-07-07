'use strict';


/** 
 * Server Handler
 * @module Server
 * @function start
 * @returns {callback: port}
 */



// INSTANTIATING EXPRESS
const express = require('express');
const app = express();


// SETTING THE VIEW ENGINE
app.set('view engine', 'ejs');
app.use(express.static('./public'));


// MIDDLEWARE REQUIREMENTS


// MIDDLEWARE FOR ALL ROUTES
app.use(express.json());

// SETTING ROUTERS 
const router = require('../routes/router');
const tRouter = require('../routes/twilio-router.js');

// APP ROUTES
app.get('/', (req, res) => {
  res.render('homePage');
});

app.use('/api', router);

app.use('/sms', tRouter);


// ERROR/POST MIDDLEWARE

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, ()=> {
      console.log(`Server is up on port:: ${port} `);
    });
  },
};