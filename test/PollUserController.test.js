var sinon = require('sinon');
var assert = require('chai').assert;
var PollUserController = require('../src/lib/controllers/PollUserController');
var Tokens = require('../src/lib/tokens/Tokens');
var Polls = require('../src/lib/polls/Polls');

suite('PollUserController', function () {
	var sut, tokens, tokensMock, callback;
	var req, res, next;
	var polls, pollsMock;

	setup(function () {
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

	test('GetCurrentPolls call token.validateToken', sinon.test(function () {
		tokensMock.expects('validateToken').once().withArgs("aTestUser", "aTestToken", sinon.match.any);
		sut.getCurrentPolls(req, res, next, tokens);
		tokensMock.verify();
	}));

	test('GetCurrentPolls call Polls.GetActivePolls on correct toekn', sinon.test(function () {
		var tokens = {
			validateToken: function (username, token, cb) {
				return cb(true);
			}
		};
		pollsMock.expects('getActivePolls').once();
		sut.getCurrentPolls(req, res, next, tokens, polls);
		pollsMock.verify();
	}));

	test('GetCurrentPolls not calls Polls.GetActivePolls on incorrect toekn', sinon.test(function () {
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
	}));

});
