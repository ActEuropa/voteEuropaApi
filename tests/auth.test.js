var sinon = require('sinon');
var assert = require('chai').assert;
var Auth = require('../src/lib/Auth');
// using the reddit provider by default
var Provider = require('../src/lib/providers/auth/reddit');
var User = require('../src/lib/dto/user');

suite('Auth', function () {
	var sut, provider, providerMock, user;

	setup(function () {
		user = new User('aTestUser', 'aTestPwd');
		provider = new Provider();
		providerMock = sinon.mock(provider);
		sut = new Auth(provider);
	});

	test('Auth calls auth method on the provider', sinon.test(function () {
		providerMock.expects('auth').once().withArgs(user);
		sut.auth(user);
		providerMock.verify();
	}));

});
