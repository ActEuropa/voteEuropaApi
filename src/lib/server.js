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

var restify = require('restify');
var AuthController = require('./controllers/AuthController.js');

var Server = function (authController) {
	this.authController = authController || new AuthController();
	this.server = restify.createServer();
	this.server.use(restify.bodyParser());
};

Server.prototype.start = function () {
	this.server.post("/auth", this.authController.authenticate);
	this.server.listen(8000);
};

module.exports = Server;
