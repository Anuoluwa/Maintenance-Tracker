
import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Test suite for version two', () => {
  describe('Tests Auth', () => {

  });

  describe('Test users', () => {
    describe('GET /users/requests', () => {
      it('should respond with json', (done) => {
        request(app)
          .get('/users/requests')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
    describe('GET /users/requests/requestId', () => {
      it('should respond with json', (done) => {
        request(app)
          .get('/users/requests')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
    describe('POST /users/requests/', () => {
      it('should respond with json', (done) => {
        request(app)
          .post('/users/requests')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
    describe('PUT /users/requests/requestId', () => {
      it('should respond with json', (done) => {
        request(app)
          .put('/users/requests')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
  });
});
