'use strict';

require('dotenv').config();


const {server} = require('../lib/server');
const supergoose = require('@code-fellows/supergoose')
const mockRequest = supergoose(server);


describe('testing the server', () => {
  it('Expect connection to home route', () => {
    return mockRequest.get('/')
    .then((res) => {
      expect(res.status).toBe(200)
    });
  });
},
);

describe('testing the server', () => {
  it('Expect application to connect to resources DB', () => {
    return mockRequest.get('/api/resource')
    .then((res) => {
      expect(res.status).toBe(200);
    });
  });
},
);
