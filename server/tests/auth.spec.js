
import { expect } from 'chai';
import request from 'supertest';
import app from '../app';
import Auth from '../auth/authController';


const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const auth = [
  {
    user_id: 1,
    username: 'Peoples',
    email: 'admin12@gmail.com',
    password: 'Receptionist@#4desk',
  },
  {
    user_id: 2,
    username: 'Ibrahim',
    email: 'admin12@gmail.com',
    password: 'Receptionist@#4desk',
  },
  {
    user_id: 3,
    username: 'Emmanuel',
    email: 'admin@gmail.com',
    password: 'Receptionist@#4desk',
  },
  {
    user_id: 4,
    username: 'Abraham',
    email: 'adminpop@gmail.com',
    password: 'Receptionist@#4desk',
  },
  {
    user_id: 5,
    username: 'Superdev',
    email: 'admin12@gmail.com',
    password: 'asdfghy',
  },
  {
    user_id: 6,
    username: 'Anuoluwapo',
    email: 'admin12@gmail.com',
    password: 'addffgg',
  },
];

describe(' POST /requests', () => {
  const requestItem = {
    id: 2,
    date: '15-05-2018',
    department: 'Peoples and Culture',
    location: 'Receptionist desk',
    contact: '09012345678',
    status: 'Approved',
  };
  it('responds with json', (done) => {
    request()
      .post('/auth/signup')
      .send(requestItem)
      .set('Accept', 'application/json')
      .expect(201)
      .end((err, res) => { // eslint-disable-line consistent-return
        if (err) return done(err);
        done();
      });
  });
});


// const userCredentials = {
//   email: 'admin@admin.com',
//   password: 'anuoluwapo',
// };
// // now let's login the user before we run any tests
// const authenticatedUser = request.agent(app);
// before((done) => {
//   authenticatedUser
//     .post('/auth/signup')
//     .send(userCredentials)
//     .end((err, response) => {
//       expect(response.statusCode).to.equal(200);
//       done();
//     });
// });

// describe('Test suite for Auth Controller', () => {
//   describe('POST /auth/signup', () => {
//     it('it should respond with  if user logs in', (req, res) => {
//       res.send(200, {
//         user: 1,
//         email: 'admin!gmial.com',
//       });
//     });
//   });
//   describe('POST /auth/signup', () => {
//     it('it should respond with  if user logs in', (done) => {
//       authenticatedUser
//         .post('/auth/signup')
//         .send(userCredentials)
//         .end((err, response) => {
//           expect(response.statusCode).to.equal(200);
//           done();
//         });
//     });
//   });


// now let's login the user before we run any tests
// const authenticatedUser = request.agent(app);
// before((done) => {
//   authenticatedUser
//     .post('/login')
//     .send(userCredentials)
//     .end((err, response) => {
//       expect(response.statusCode).to.equal(200);
//       expect('Location', '/home');
//       done();
//     });
// });


// describe('GET /users/requests/requestId', () => {
//   it('should respond with json', (done) => {
//     request(app)
//       .get('/users/requests')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });
// describe('POST /users/requests/', () => {
//   it('should respond with json', (done) => {
//     request(app)
//       .post('/users/requests')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });
// describe('PUT /users/requests/requestId', () => {
//   it('should respond with json', (done) => {
//     request(app)
//       .put('/users/requests')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });
// });
// });
