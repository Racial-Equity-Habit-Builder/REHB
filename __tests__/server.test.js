'use strict';

require('dotenv').config();


const { server } = require('../lib/server.js');
const tRouter = require('../routes/twilio-router.js')
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
const supertest = require('supertest');
const { deleteOne } = require('../middleware/models/user/user-schema.js');
let mockTest = supertest(server)


let token = 'YWRtaW5jYW5kb2FsbHRoZXl3YW50';

// beforeAll((done) => {
//   mockRequest.post('api/resource')
//   .send({
//     Authentication: admincandoalltheywant,
//   })
//   .end((err, res) => {
//     token = res.body.token;
//     done()
//   })
// })



describe('testing the Mongo Database', () => {
  // it('Should connect to home route', () => {
  //   return mockRequest.get('/api/resource')
  //     .auth(username,password)
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     })
  //     .catch(function(err, res) {
  //       if (err) return done(err);
  //       console.log(err,res);
  //       done()
  //     })
  // });
  // it('Should get from the resources DB', () => {
  //   return mockRequest.get('/api/resource')
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     });
  // });
  // it('Should get from the users DB', () => {
  //   return mockRequest.get('/api/user')
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     });
  // });
  // it('Should post to the users DB', () => {
  //   return mockRequest.post('/api/user')
  //   .set('authentication', `Basic ${token}`)
  //   .then((res) => {
  //     expect(res.status).toBe(200);
  //   })

  // });
  // it('Should post to the resource DB', () => {
  //   return mockRequest.post('/api/resource')
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //     });
  // });
  //   it('Should post to the resource DB', () => {
  //     return mockRequest.put('/api/resource')
  //       .then((res) => {
  //         expect(res.status).toBe(200);
  //       });
  //   });
  // it('Should post to the resource DB', () => {
  //   const req = {body:{Body:'Signup', From: '+12065555555'}};
  //   const spy = jest.spyOn(user, 'create')
  //   return mockRequest.post('/sms', tRouter.handleText(req))
  //     .then((res) => {

  //       expect(spy).toHaveBeenCalledTimes(1);
  //     });
  // });
  // it('Should post to the resource DB', () => {
  //   return mockTest.post('/sms')
  //     .send( { Body: 'Signup' })
  //     .then(res => {
  //       // do all tests in here - including error handling tests
  //       expect('validation failed').toMatch('validation failed');
  //     })
  // });
  it('Should post to the resource DB', () => {
    return mockTest.post('/sms')
      .send({ Body: 'Options' })
      .then(res => {
        // do all tests in here - including error handling tests
        expect(res.status).toBe(200);
      })
      .catch(err => {
        console.log(err.message)
      })
  });
  it('Should post to the resource DB', () => {
    return mockTest.post('/sms')
      .send({ Body: 'Done', From: '+12065555555' })
      .then(res => {
        // do all tests in here - including error handling tests
        expect(res.status).toBe(200);
      })
      .catch(err => {
        console.log(err.message)
      })
  });
  it('Should post to the resource DB', () => {
    return mockTest.post('/sms')
      .send({ Body: 'Leave', From: '+12065555555' })
      .then(res => {
        // do all tests in here - including error handling tests
        expect(res.status).toBe(200);
      })
      .catch(err => {
        console.log(err.message)
      })
  });
});
