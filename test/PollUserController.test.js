var sinon = require('sinon');
var assert = require('chai').assert;
var PollUserController = require('../src/lib/controllers/PollUserController');
var Tokens = require('../src/lib/tokens/Tokens');

suite('PollUserController', function () {
	var sut, tokens, tokensMock, callback;
	var req, res, next;


	setup(function () {
		callback = function () {};
		req = {
			params: {
				username: "aTestUser",
				token: "aTestToken"
			}
		};
		tokens = new Tokens();
		tokensMock = sinon.mock(tokens);
		sut = new PollUserController();
	});

	test('GetCurrentPolls call token.validateToken', sinon.test(function () {
		tokensMock.expects('validateToken').once().withArgs("aTestUser", "aTestToken", sinon.match.any);
		sut.getCurrentPolls(req, res, next, tokens);
		tokensMock.verify();
	}));

});
