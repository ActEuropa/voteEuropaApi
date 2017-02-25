var sinon = require('sinon');
var assert = require('chai').assert;
var Token = require('../src/lib/tokens/Tokens');
var Provider = require('../src/lib/tokens/persistenceProviders/redis');


suite('Tokens', function () {
	var sut, provider, providerMock, cb, username;

	setup(function () {
		username = "test";
		cb = function(){};
		provider = new Provider();
		providerMock = sinon.mock(provider);
		sut = new Token(provider);
	});

	test('Tokens calls save to the provider with an array', sinon.test(function () {
		providerMock.expects('save').calledWith(sinon.match.array, sinon.match.function);
		sut.getToken(username, cb);
		providerMock.verify();
	}));

});
