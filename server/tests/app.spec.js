import request from 'supertest';
import app from '../app';

describe('GET /requests', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/requests')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
