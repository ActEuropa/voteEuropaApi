/*
 Copyright (c) 2017 ActEuropa

 This file is part of VoteEuropa.

 VoteEuropa is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 You should have received a copy of the GNU Affero General Public License
 along with VoteEuropa. If not, see <http://www.gnu.org/licenses/>.
 */

var sinon = require('sinon');
var assert = require('chai').assert;
var AuthController = require('../src/lib/controllers/AuthController');
var User = require('../src/lib/dto/user');
var Auth = require('../src/lib/Auth');
var Tokens = require('../src/lib/tokens/Tokens');

suite('AuthController', function () {
	var sut, user, auth, authMock, tokens, tokensMock;
	var req, res, next;

	setup(function () {
		req = {
			params: {
				username: "aTestUser",
				pwd: "aTestPwd"
			}
		};
		user = new User('aTestUser', "aTestPwd");
		auth = new Auth();
		authMock = sinon.mock(auth);
		tokens = new Tokens();
		tokensMock = sinon.mock(tokens);
		sut = new AuthController();
	});

	test('AuthController calls Auth auth method', sinon.test(function () {
		authMock.expects('auth').once().withArgs(user, sinon.match.any);
		sut.authenticate(req, res, next, auth, tokens);
		authMock.verify();
	}));

	test('AuthController calls Tokens.getToken', sinon.test(function () {
		tokensMock.expects('getToken').once().withArgs();
		sut.authenticate(req, res, next, auth, tokens);
		tokensMock.verify();
	}));

});
