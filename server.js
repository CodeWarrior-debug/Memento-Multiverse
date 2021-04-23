const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("sequelize");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('express-session')({
  secret: 'keyboard mouse'
}));
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'html')


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
