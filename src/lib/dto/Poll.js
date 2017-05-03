var Poll = function (id, description, title, owner, mechanism) {
  this.setId(id);
  this.setDescription(description);
  this.setTitle(title);
  this.setOwner(owner);
  this.setMechanism(mechanism);
};

Poll.prototype.setId = function (id) {
  this.id = id;
};

Poll.prototype.setDescription = function (description) {
  this.description = description;
};

Poll.prototype.setTitle = function (title) {
  this.title = title;
};

Poll.prototype.setOwner = function (owner) {
  this.owner = owner;
};

Poll.prototype.setMechanism = function (mechanism) {
  this.mechanism = mechanism;
};

Poll.prototype.serialize = function () {
  return JSON.stringify(this);
};

module.exports = Poll;
