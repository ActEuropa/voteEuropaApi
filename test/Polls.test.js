var sinon = require('sinon');
var assert = require('chai').assert;
var Polls = require('../src/lib/polls/Polls');

describe('Polls', function () {
  var sut, provider, providerMock;

  beforeEach(function () {
    provider = {
      getActivePolls: function () {}
    };
    providerMock = sinon.mock(provider);
    sut = new Polls(provider);
  });

  it('call getActivePolls on provider', function () {
    var cb = function () {};
    providerMock.expects('getActivePolls').once().withArgs(sinon.match.func);
    sut.getActivePolls(cb);
    providerMock.verify();
  });

});
