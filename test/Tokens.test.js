var sinon = require('sinon');
var assert = require('chai').assert;
var Token = require('../src/lib/tokens/Tokens');
var Provider = require('../src/lib/tokens/persistenceProviders/redis');


suite('Tokens', function () {
	var sut, provider, providerMock, cb, username, validToken, validArray;

	setup(function () {
		username = "test";
		validToken = "aValidToken";
		validArray = {
			username: username,
			token: validToken
		};
		cb = function(){};
		provider = new Provider();
		providerMock = sinon.mock(provider);
		sut = new Token(provider);
	});

	test('Tokens calls save to the provider with an array', sinon.test(function () {
		providerMock.expects('save').once().calledWith(sinon.match.array, sinon.match.function);
		sut.getToken(username, cb);
		providerMock.verify();
	}));

	test('Tokens call get to the provider with an array with valid data', sinon.test(function () {
		providerMock.expects('get').once().calledWith(validArray, sinon.match.function);
		sut.validateToken(username, validToken, cb);
		providerMock.verify();
	}));

});
