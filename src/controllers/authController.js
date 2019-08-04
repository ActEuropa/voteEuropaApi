// const log = require('../lib/log').getInstance()
const AuthService = require('../services/authService')

const AuthController = function (authService) {
  this.authService = authService || new AuthService()
}

AuthController.prototype.withGoogle = function () {
  this.authService.authGoogle()
}

module.exports = AuthController
