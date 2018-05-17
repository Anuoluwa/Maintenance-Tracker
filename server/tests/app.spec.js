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

  // describe('/GET/requests/:id ', () => {
  //   it('it should GET a request by the given id', () => chai.request(app)
  //     .get(`api/requests/${request.id}`)
  //     .then((res) => {
  //       expect(res).have.status(200);
  //       expect(res).to.have.property('id').equal('2');
  //       expect(res).to.have.property('date').equal('15-05-2018');
  //       expect(res).to.have.property('department').equal('Peoples and Culture');
  //       expect(res).to.have.property('location').equal('Receptionist desk');
  //       expect(res).to.have.property('contact').equal('0908765344');
  //       expect(res).to.have.property('status').equal('Approved');
  //     }));
  // });
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
  describe('GET /user/:id', () => {
    it('respond with json containing a single request', (done) => {
      request(app)
        .get('/api/requests/R001')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});

