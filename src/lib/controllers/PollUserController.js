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

var Tokens = require('../tokens/Tokens');

var PollUserController = function () {
	// this exists to be a constructor
};

PollUserController.prototype.getCurrentPolls = function (req, res, next, injectedTokens) {
	var tokens = injectedTokens || new Tokens();
	var username = req.params.username;
	var token = req.params.token;
	tokens.validateToken(username, token, function (valid) {
		if(valid){

		} else {

		}
	});
};


module.exports = PollUserController;
