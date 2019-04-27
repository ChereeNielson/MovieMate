const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const logger = require("morgan");
const routes = require("./routes");
const cors = require("cors");


//using middlewhere acrossed the entire application before any route gets hit.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.options("*", cors());
app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
