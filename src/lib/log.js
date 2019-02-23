const settings = require('../settings')
const bunyan = require('bunyan')

let instance = null
/* istanbul ignore next */
module.exports.getInstance = function () {
  if (!instance) {
    instance = bunyan.createLogger({
      name: 'VoteEuropa',
      level: settings.logLevel,
      stream: process.stdout
    })
  }
  return instance
}
