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

var settings = require('../settings');
var Provider = require('./providers/auth/' + settings.auth.provider);

var Auth = function(provider) {
	this.provider = provider || new Provider();
};

Auth.prototype.auth = function(user, callback) {
	this.provider.auth(user, callback);
};

Auth.prototype.register = function (user, callback) {

};


module.exports = Auth;
