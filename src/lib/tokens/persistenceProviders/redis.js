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

var redis = require('redis');
var settings = require('../../../settings');

var Redis = function () {
	// this works as the constructor.
};

Redis.prototype.save = function (data, callback) {
	var client = this._getRedisClient();
	client.hmset(JSON.stringify(data));
	return callback();
};

Redis.prototype.get = function (data, callback) {
	var client = this._getRedisClient();
	client.get(data, function (err, reply) {
		if(err){
			throw new Error(err);
		}
		if(reply == ""){
			return callback(false);
		} else {
			return callback(true);
		}
	});

};

Redis.prototype._getRedisClient = function () {
	var host = settings.redis.host;
	var port = settings.redis.port;
	if (this.redis) {
		return this.redis;
	} else {
		return redis.createClient(port, host);
	}
};

module.exports = Redis;
