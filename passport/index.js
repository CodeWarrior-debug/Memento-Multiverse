const passport = require('passport');
const localStrategy = require('./localStrategy');
const db = require('../models');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(localStrategy);
module.exports = passport;