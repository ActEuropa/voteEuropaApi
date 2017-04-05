var sinon = require('sinon');
var assert = require('chai').assert;
var PollUserController = require('../src/lib/controllers/PollUserController');
var Tokens = require('../src/lib/tokens/Tokens');
var Polls = require('../src/lib/polls/Polls');

describe('PollUserController', function () {
	var sut, tokens, tokensMock, callback;
	var req, res, next;
	var polls, pollsMock;

  beforeEach(function () {
		callback = function () {};
		req = {
			params: {
				username: "aTestUser",
				token: "aTestToken"
			}
		};
		polls = new Polls();
		pollsMock = sinon.mock(polls);
		tokens = new Tokens();
		tokensMock = sinon.mock(tokens);
		sut = new PollUserController();
	});

	it('GetCurrentPolls call token.validateToken', function () {
		tokensMock.expects('validateToken').once().withArgs("aTestUser", "aTestToken", sinon.match.any);
		sut.getCurrentPolls(req, res, next, tokens);
		tokensMock.verify();
	});

	it('GetCurrentPolls call Polls.GetActivePolls on correct toekn', function () {
		var tokens = {
			validateToken: function (username, token, cb) {
				return cb(true);
			}
		};
		pollsMock.expects('getActivePolls').once();
		sut.getCurrentPolls(req, res, next, tokens, polls);
		pollsMock.verify();
	});

	it('GetCurrentPolls not calls Polls.GetActivePolls on incorrect toekn', function () {
		var tokens = {
			validateToken: function (username, token, cb) {
				return cb(false);
			}
		};
		var res = {
			status: function() {},
			json: function () {}
		};
		pollsMock.expects('getActivePolls').never();
		sut.getCurrentPolls(req, res, next, tokens, polls);
		pollsMock.verify();
	});

});
