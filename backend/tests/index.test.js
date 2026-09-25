const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  test('should return hello message', async () => {
    const response = await request(app)
      .get('/api/hello');

    expect(response.statusCode).toBe(200);

    expect(response.body.message)
      .toBe('Hello from Node.js Backend!');
  });
});