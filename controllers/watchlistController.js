const db = require("../models");

module.exports = {
  findByUserId: function(req, res) {
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
    db.Watchlist.destroy({ where: { id: req.params.id } })
      .then(dbWatchlist => res.json(dbWatchlist))
      .catch(err => res.status(422).json(err));
  },
  recommend: function(req, res) {
    db.Friends.findAll({
      where: { userId: req.params.id }
    })
      .then(function(dbFriends) {
        let tempData = []
        for (let i = 0; i < dbFriends.length; i++ ){
          let followedId = dbFriends[i].dataValues.FollowedId
          tempData.push(followedId)
        }
        console.log(tempData)
        db.Watchlist.findAll({
          where: { 
            userId:  tempData
          }
        })
        .then(function(dbWatchlist){
          res.send(dbWatchlist);
        })
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Watchlist.update(req.body, { where: { id: req.params.id } })
      .then(dbWatchlist => res.json(dbWatchlist))
      .catch(err => res.status(422).json(err));
  }
};
