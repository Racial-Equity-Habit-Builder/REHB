'use strict';

require('dotenv').config();


const { server } = require('../lib/server');
const tRouter = require('../routes/twilio-router.js')
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
const supertest = require('supertest')
let mockTest = supertest(server.server)


describe('testing the Mongo Database', () => {
  it('Should connect to home route', () => {
    return mockRequest.get('/')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it('Should get from the resources DB', () => {
    return mockRequest.get('/api/resource')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it('Should get from the users DB', () => {
    return mockRequest.get('/api/user')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it('Should post to the users DB', () => {
    return mockRequest.post('/api/user')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it('Should post to the resource DB', () => {
    return mockRequest.post('/api/resource')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  // it('Should post to the resource DB', () => {
  //   return mockRequest.put('/api/resource')
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     });
  // });
  // it('Should post to the resource DB', () => {
  //   const req = {body:{Body:'Signup', From: '+12065555555'}};
  //   const spy = jest.spyOn(user, 'create')
  //   return mockRequest.post('/sms', tRouter.handleText(req))
  //     .then((res) => {

  //       expect(spy).toHaveBeenCalledTimes(1);
  //     });
  // });
  it('Should post to the resource DB', () => {
    return mockTest.post('/sms')
      .send( { Body: 'Signup' })
      .then(res => {
        // do all tests in here - including error handling tests
        expect(res.status).toThrow();
      })
  });
});
