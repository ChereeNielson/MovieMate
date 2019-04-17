const db = require("../models");

module.exports = {
  findById: function(req, res) {
    db.Friends.findAll({
      include: [
        {
          model: db.Users,
          as: "Followee",
          attributes: { exclude: ["password"] }
        },
        { model: db.Users, as: "User", attributes: { exclude: ["password"] } }
      ],
      where: { UserId: req.params.id }
    })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create(req.body)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Users.destroy({ where: { email: req.params.email } })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  }
};
