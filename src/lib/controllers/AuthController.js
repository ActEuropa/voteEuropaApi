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

var Auth = require('../Auth.js');
var User = require('../dto/user');
var Tokens = require('../tokens/Tokens');

var AuthController = function () {
	// this exists to be the constructor.
};

AuthController.prototype.authenticate = function (req, res, next, auth, tokens) {
	this.auth = auth || new Auth();
	this.tokens = tokens || new Tokens();
	var self = this;
	var user = new User(req.params.username, req.params.pwd);
	this.auth.auth(user, function (response, err) {
		if(err){
			res.status(500);
			res.json({
				error: err
			});
		} else {
			self.tokens.getToken(function (token) {
				res.status(200);
				res.json({
					data: response,
					token: token
				});
			});
		}
	});
};


module.exports = AuthController;
