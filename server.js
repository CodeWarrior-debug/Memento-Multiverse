const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("sequelize");
const  route  = require("./routes");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(route)
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});
