const db = require("../models");

module.exports = {
  findById: function(req, res) {
    db.Friends.findAll({
      include: [
        {
          model: db.Users,
          as: "Followee",
          attributes: { exclude: ["password", "createdAt", "updatedAt"] }
        }
      ],
      where: { userId: req.params.id }
    })
      .then(dbFriends => res.json(dbFriends))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Friends.create(req.body)
      .then(dbFriends => res.json(dbFriends))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Friends.destroy({ where: { UserId: req.params.id } })
      .then(dbFriends => res.json(dbFriends))
      .catch(err => res.status(422).json(err));
  }
};
