const log = require('../lib/log').getInstance()
const AuthService = require('../services/authService')

const AuthController = function (authService) {
  this.authService = authService || new AuthService()
}

AuthController.prototype.withGoogle = function () {
  log.debug('Calling auth on Google')
  this.authService.authGoogle()
}

module.exports = AuthController
