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

var ldapjs = require('ldapjs');
var settings = require('../../../settings.js');

var LdapProvider = function () {
	this.ldap = ldapjs.createClient({
		url: settings.ldap.url
	});
};

LdapProvider.prototype.auth = function (user, callback) {
	this.ldap.bind('cn=' + user.getUserName(), user.getPassword(), function(err) {
		if(err){
			callback(null, err);
		} else {
			callback(true, null);
		}
	});
};


module.exports = LdapProvider;
