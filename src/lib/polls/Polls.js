

var Polls = function (provider) {
  this.provider = provider;
};

Polls.prototype.getActivePolls = function (callback) {
  this.provider.getActivePolls(callback);
};


module.exports = Polls;
