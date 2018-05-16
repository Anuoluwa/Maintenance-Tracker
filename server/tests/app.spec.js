import { expect } from 'chai';
import app from '../app';
// import requests from '../models/db';
// import chaiHttp from 'chai-http';
const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Requests Controller', () => {
  describe('/GET requests without JWT authentication', () => {
    it('it should GET all the requests', () => chai.request(app)
      .get('/api/requests')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json; /* eslint-disable-line no-unused-expressions */
      }));
  });
});

