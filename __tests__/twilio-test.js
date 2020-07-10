'use strict';

// const twilio = require('../routes/twilio-router.js');
const router = require('../routes/twilio-router.js');
// const {server} = require('../lib/server.js');
// const supergoose = require('@code-fellows/supergoose');
// const mockTwil = supergoose(server);
const spy = jest.spyOn(console, 'log');

describe('This tests the twilio functionality from the backend', () => {
  it('should return an object with ', () => {
    let req = {};
    const data = router.handleText(req);
    console.log(data)
    expect(data).resolves.toBe({});
    // expect(spy).toHaveBeenCalledTimes(1)
  });
  // it('Should post to the resource DB', () => {
  //   return router.router.post('/sms', router.handleText)
  //     .send( { Body: 'Signup', From: '+12065555555' })
  //     .then((res) => {
  //       // do all tests in here - including error handling tests
  //       expect(res.error).toThrowError('TypeError');
  //     });
  //   })
});