const request = require('supertest')

describe('loading express', function () {
  let server

  beforeEach(function () {
    server = require('../src/index')
  })

  afterEach(function () {
    server.close()
  })

  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })

  it('misc ping: /ping', (done) => {
    request(server)
      .get('/ping')
      .expect(200, done)
  })

})