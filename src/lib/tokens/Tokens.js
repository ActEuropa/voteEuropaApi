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

var randToken = require('rand-token');
var settings = require('../../settings');
var Provider = require('./persistenceProviders/' + settings.auth.tokensPersistenceProvider);

var Tokens = function (provider) {
	this.provider = provider || new Provider();
};

Tokens.prototype.getToken = function (username, callback) {
	var token = randToken.generate(64);
	var args = {
		username: username,
		token: token
	};
	this.provider.save(args, function (err) {
		if(err){
			throw new Error(err);
		} else {
			return callback(token);
		}
	});
};


module.exports = Tokens;
