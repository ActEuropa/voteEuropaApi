var sinon = require('sinon');
var assert = require('chai').assert;
var Token = require('../src/lib/tokens/Tokens');
var Provider = require('../src/lib/tokens/persistenceProviders/redis');


describe('Tokens', function () {
	var sut, provider, providerMock, cb, username, validToken, validArray;

  beforeEach(function () {
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

	it('Tokens calls save to the provider with an array', function () {
		providerMock.expects('save').once().calledWith(sinon.match.array, sinon.match.function);
		sut.getToken(username, cb);
		providerMock.verify();
	});

	it('Tokens call get to the provider with an array with valid data', function () {
		providerMock.expects('get').once().calledWith(validArray, sinon.match.function);
		sut.validateToken(username, validToken, cb);
		providerMock.verify();
	});

	it('Tokens calls callback with false on incorrect token', function () {
		var provider = {
			get: function (data, callback) {
				return callback(false);
			}
		};
		var sut = new Token(provider);
		var cb = sinon.spy();
		sut.validateToken(username, validToken, cb);
		sinon.assert.calledWith(cb, false);
	});

	it('Tokens calls callback with true on correct token', function () {
		var provider = {
			get: function (data, callback) {
				return callback(true);
			}
		};
		var sut = new Token(provider);
		var cb = sinon.spy();
		sut.validateToken(username, validToken, cb);
		sinon.assert.calledWith(cb, true);
	});
});
