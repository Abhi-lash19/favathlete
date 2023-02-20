const request = require('supertest');
const app = require('./index');
const assert = require('assert');

describe('GET /athlete', function() {
  it('responds with JSON containing the name of my favourite athlete', function(done) {
    request(app)
      .get('/athlete')
      .expect('Content-Type', /json/)
      .expect(200, { myFavouriteAthlete: 'MS Dhoni' }, done);
  });
});
