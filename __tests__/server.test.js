'use strict';

require('dotenv').config();
const server = require('../lib/server');
let request = require('supertest')(server.server);

jest.spyOn(global.console, 'log');


describe('testing the server', () => {
  it('expect slash to be not found', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
},
);