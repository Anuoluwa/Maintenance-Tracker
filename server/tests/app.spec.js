import supertest from 'supertest';
// import expect from 'chai';
// import app from '../app';

const url = supertest('http://localhost:3000');

describe(' /GET Requests', () => {
  it('it should return a 200 OK response', (done) => {
    url.get('/requests')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
