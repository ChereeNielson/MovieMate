const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const db = require("./models");
const logger = require("morgan");
const routes = require("./routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(express.static("html"));

app.options("*", cors());
app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
