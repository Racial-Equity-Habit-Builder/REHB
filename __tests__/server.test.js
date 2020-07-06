'use strict';

require('dotenv').config();
const supergoose = require('cf-supergoose');
const server = require('../lib/server');
let request = require('supertest')(server.server);

jest.spyOn(global.console, 'log');

// beforeAll(() => {
//   supergoose.startDB();
// });

// afterAll(()=> {
//   supergoose.stopDB();
// });

// Server Start

// describe('This should start our server and connect to the DB', () => {
//   it('should respond with a console log', ()=> {
//     server.start(3000);
//     expect(console.log).toHaveBeenCalled();
//   });
// });

describe('testing the server', () => {
  it('expect slash to be not found', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
},
);