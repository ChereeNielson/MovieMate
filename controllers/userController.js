const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Users.findAll({ attributes: { exclude: ["password"] } })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users.findOne({
      attributes: { exclude: ["password"] },
      where: { email: req.params.email }
    })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create(req.body)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users.update(req.body, { where: { email: req.params.email } })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users.destroy({ where: { email: req.params.email } })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  auth: function(req, res) {
    db.Users.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUsers) {
      if (!dbUsers) {
        res.send("No User Found");
      } else if (!dbUsers.validPassword(req.body.password)) {
        res.send("Incorrect Password");
      } else if (dbUsers.validPassword(req.body.password)) {
        res.send("Authenticated");
      }
    });
  }
};
