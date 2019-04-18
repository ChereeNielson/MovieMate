const axios = require("axios");
require("dotenv").config();

module.exports = {
  findAll: function(req, res) {
    axios({
      method: "get",
      url:
        "http://www.omdbapi.com/?apikey=" +
        process.env.OMDB_API +
        "&t=" +
        req.body.search
    })
      .then(function(results) {
        res.send(results.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  findById: function(req, res) {
    axios({
      method: "get",
      url:
        "http://www.omdbapi.com/?apikey=" +
        process.env.OMDB_API +
        "&i=" +
        req.body.id
    })
      .then(function(results) {
        res.send(results.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
