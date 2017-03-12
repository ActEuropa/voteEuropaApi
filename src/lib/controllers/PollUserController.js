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
var Polls = require('../polls/Polls');

var PollUserController = function () {
	// this exists to be a constructor
};

PollUserController.prototype.getCurrentPolls = function (req, res, next, injectedTokens, injectedPolls) {
	var tokens = injectedTokens || new Tokens();
	var username = req.params.username;
	var token = req.params.token;
	var polls = injectedPolls || new Polls();
	tokens.validateToken(username, token, function (valid) {
		if(valid){
			polls.getActivePolls();
		} else {
			res.status(401);
			res.json({
				"message": "Incorrect token."
			});
		}
	});
};


module.exports = PollUserController;
