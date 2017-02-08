var User = function (username, password) {
	this.username = username;
	this.password = password;
};

User.prototype.getUserName = function () {
	return this.username;
};

User.prototype.getPassword = function () {
	return this.password;
};

User.prototype.setUserName = function (username) {
	this.username = username;
};

User.prototype.setPassword = function (password) {
	this.password = password;
};

module.exports = User;
