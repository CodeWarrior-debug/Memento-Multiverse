const passport = require('passport');
const localStrategy = require('./localStrategy');
const db = require('../models');
// const PORT = process.env.PORT || 3001

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, id);
});

passport.use(localStrategy);
module.exports = passport;