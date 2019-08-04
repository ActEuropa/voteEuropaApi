const expect = require('chai').expect
const sinon = require('sinon')
const AuthController = require('../../src/controllers/authController')

describe('AuthController', () => {
  let sut, authService, authServiceMock

  beforeEach(() => {
    authService = {
      authGoogle: function () {}
    }
    authServiceMock = sinon.mock(authService)
    sut = new AuthController(authService)
  })

  it('Calls authGoogle on authService', () => {
    authServiceMock.expects('authGoogle').once()
    sut.withGoogle()
    authServiceMock.verify()
  })
})
