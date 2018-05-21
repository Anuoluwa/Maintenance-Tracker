import { expect } from 'chai';
import request from 'supertest';
import express from 'express';
import app from '../app';
import Request from '../controllers/requestController';
// import router from '../routes/route';
// import requests from '../models/db';
// import chaiHttp from 'chai-http';
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);


describe('Requests Controller Test Suite', () => {
  const userCredentials = {
    username: 'admin',
    email: 'admin@gmail.com',
  };
  const authenticatedUser = request(app);
  describe('Authentication', () => {
    describe('should return 200 OK for authenticated users', () => {
      before((done) => {
        authenticatedUser
          .post('/users')
          .send(userCredentials)
          .end((err, res) => {
            expect(res).to.equal(200);
            done();
          });
      });
    }); // end
  });
  describe('GET /requests', () => {
    it('should return a 200 response if the user is logged ', () => {
      chai.request(app)
        .put('api/users')
        .send({ password: '123', confirmPassword: '123' })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
    });
    it('it should GET Error404 with invalid path', () => chai.request(app)
      .get('/api/!requests')
      .then((res) => {
        expect(res).to.have.status(404);
      }));
    it('respond with json', (done) => {
      request(app)
        .get('/api/requests')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(403, done);
    });
    it('respond with 404 for invalid url', (done) => {
      request(app)
        .get('/api/invalidurl')
        .set('Accept', 'application/json')
        .expect(404, done);
    }); // / requests

    // * Single requests  */
    describe('GET /api/requests:id', () => {
      it('respond with json containing a single request', (done) => {
        request(app)
          .get('/api/requests/:id')
          .set('Accept', 'application/json')
          .expect('Content-Type', /text/)
          .expect(403, done);
      });
    }); // single requests

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
        request(app)
          .post('/api/requests')
          .send(requestItem)
          .set('Accept', 'application/json')
          .expect(201)
          .end((err, res) => { // eslint-disable-line consistent-return
            if (err) return done(err);
            done();
          });
      });
    }); // post

    describe('PUT /requests/<requestId> to modify a request', () => {
      it('it should respond with json to modify', (done) => {
        request(app)
          .put('/api/requests/1')
          .set('Accept', 'application/json')
          .expect(202, done);
      });
      it('respond with 201 created', (done) => {
        request(app)
          .put('/api/requests/1')
          // .send({
          //   id: 2,
          //   date: '15-05-2018',
          //   department: 'Peoples and Culture',
          //   location: 'Receptionist desk',
          //   contact: '09012345678',
          //   status: 'Approved',
          // })
          .set('Accept', 'application/json')
          .expect(202)
          .end((err) => { // eslint-disable-line consistent-return
            if (err) return done(err);
            done();
          });
      });
    });
  });
});
