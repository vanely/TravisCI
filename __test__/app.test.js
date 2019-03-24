const app = require('../app');
const request = require('supertest');

//test components
describe('GET /', () => {
  //individual test
  it('responds with 200', async () => {
    //test will fail if status code is not 200
    await request(app).get('/').expect(200);
  })
});