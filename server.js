const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const logger = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(express.static("public"));


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);  });
});