var settings = require('../../settings');
var Provider = require('../providers/polls/' + settings.storage.provider);

var Polls = function (provider) {
  this.provider = provider || new Provider();
};

Polls.prototype.getActivePolls = function (callback) {
  this.provider.getActivePolls(callback);
};

module.exports = Polls;
