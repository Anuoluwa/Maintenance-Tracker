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
  describe('/GET requests without JWT authentication', () => {
    it('it should GET all the requests with auth', () => chai.request(app)
      .get('/api/requests')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json; /* eslint-disable-line no-unused-expressions */
      }));
    it('it should GET Error404 with invalid path', () => chai.request(app)
      .get('/api/!requests')
      .then((res) => {
        expect(res).to.have.status(404);
      }));
  });
});

/* ===== Integration testing====  */
describe('Integrationtesting with supertest for requestController', () => {
  describe('GET /requests', () => {
    it('respond with json', (done) => {
      request(app)
        .get('/api/requests')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  // * Single requests  */
  describe('GET /api/requests:id', () => {
    it('respond with json containing a single request', (done) => {
      request(app)
        .get('/api/requests/:id')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('should be an object with keys and values', (done) => {
      request(app)
        .get('/api/requests/10')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('id');
          expect(res.body.id).to.not.equal(null);
          expect(res.body).to.have.property('date');
          expect(res.body.date).to.not.equal(null);
          expect(res.body).to.have.property('department');
          expect(res.body.department).to.not.equal(null);
          expect(res.body).to.have.property('location');
          expect(res.body.location).to.not.equal(null);
          expect(res.body).to.have.property('contact');
          expect(res.body.contact).to.not.equal(null);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.not.equal(null);
          done();
        });
    });
    it('should have a 11 digit contact phone number', (done) => {
      request(app)
        .get('/api/requests/10')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body.date).to.equal('15-05-2018');
          expect(res.body.department.length).to.below(30);
          expect(res.body.location.length).to.below(30);
          expect(res.body.contact.length).to.below(12);
          expect(res.body.status.length).to.below(20);
          done();
        });
    });
  });
});

describe('POST /requests', () => {
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
      .expect(200)
      .end((err, res) => { // eslint-disable-line consistent-return
        if (err) return done(err);
        done();
      });
  });
});

