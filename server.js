const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const logger = require("morgan");
const routes = require("./routes");
const cors = require("cors");
const session = require('express-session');

app.use(session({
  secret: process.env.SESSIONSECRET || "cat",
  resave: false,
  saveUninitialized: true
}));

function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      id: 1,
      firstName: "Eric",
      lastName: "player",
      email: "ellsayer@msn.com",
      password: "test",
      bio: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      gender: "Male",
      state: "Utah",
      country: "USA",
      dateOfBirth: "04/27/1982"
    }
  }
  next()
}

//using middlewhere acrossed the entire application before any route gets hit.
app.use(userSetup)

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
