'use strict';

// const twilio = require('../routes/twilio-router.js');
const router = require('../routes/twilio-router.js');
// const {server} = require('../lib/server.js');
// const supergoose = require('@code-fellows/supergoose');
// const mockTwil = supergoose(server);

describe('This tests the twilio functionality from the backend', () => {
  it('should return an object with ', () => {
    let req = {};
    const data = router.handleText(req);
    expect(data).resolves.toBe({});
  });
});