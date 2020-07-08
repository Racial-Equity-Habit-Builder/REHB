'use strict';

require('dotenv').config();


const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('testing the server', () => {
  it('Should connect to home route', () => {
    return mockRequest.get('/sms')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  // it('Should connect to resources DB', () => {
  //   return mockRequest.get('/api/resource')
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     });
  // });
  // it('Should connet to the users DB', () => {

  // });
});
