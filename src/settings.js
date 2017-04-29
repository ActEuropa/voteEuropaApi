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

var settings = {
	auth: {
		provider: 'ldap',
		tokensPersistenceProvider: 'redis'
	},
	storage: {
		provider: 'mongodb'
	},
	redis:{
		host: 'localhost',
		port: 6379
	},
	ldap: {
		url: 'ldap://127.0.0.1:389',
		dcString: ',dc=test,dc=com'
	},
	mongodb: {
		host: '127.0.0.1',
		port: '27017',
		collection: 'vote_europa'
	}
};

module.exports = settings;
