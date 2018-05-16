import { expect } from 'chai';
// import router from '../routes/route';
import app from '../app';
import Request from '../controllers/requestController';
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
  describe('/GET/requests/:id ', () => {
    it('it should GET a request by the given id', (done) => {
      const request = new Request({
        id: 1,
        date: '15-05-2018',
        department: 'Peoples and Culture',
        location: 'Receptionist desk',
        contact: '0908765344',
        status: 'Approved',
      });
      request.save(() => {
        chai.request(app)
          .get(`/requests/${request.id}`)
          .send(request)
          .end((res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('id').eql(request.id);
            res.body.should.have.property('date');
            res.body.should.have.property('department');
            res.body.should.have.property('location');
            res.body.should.have.property('contact');
            res.body.should.have.property('status');
            done();
          });
      });
    });
  });
});
