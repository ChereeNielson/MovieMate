const db = require("../models");

module.exports = {
  findById: function(req, res) {
    db.Watchlist.findAll({
      where: { userId: req.params.id }
    })
      .then(dbWatchlist => res.json(dbWatchlist))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Watchlist.create(req.body)
      .then(dbWatchlist => res.json(dbWatchlist))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Watchlist.destroy({ where: { UserId: req.params.id } })
      .then(dbWatchlist => res.json(dbWatchlist))
      .catch(err => res.status(422).json(err));
  }
};
