var sinon = require('sinon');
var assert = require('chai').assert;
var Auth = require('../src/lib/Auth');
// using the reddit provider by default
var Provider = require('../src/lib/providers/auth/ldap');
var User = require('../src/lib/dto/user');

describe('Auth', function () {
	var sut, provider, providerMock, user, redditApi;

  beforeEach(function () {
		redditApi = function() {};
		user = new User('aTestUser', 'aTestPwd');
		provider = new Provider(redditApi);
		providerMock = sinon.mock(provider);
		sut = new Auth(provider);
	});

	it('Auth calls auth method on the provider', function () {
		var callback = function () {};
		providerMock.expects('auth').once().withArgs(user, sinon.match.any);
		sut.auth(user, callback);
		providerMock.verify();
	});

});
