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


// setting view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// MIDDLEWARE REQUIREMENTS


// MIDDLEWARE FOR ALL ROUTES
app.use(express.json());


// APP ROUTES

app.get('/', (req, res) => {
  res.render('homePage');
});


// ERROR/POST MIDDLEWARE

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, ()=> {
      console.log(`Server is up on port:: ${port} `);
    });
  },
};