const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
// const Port = process.env.Port || 3001

passport.use('local-login', new LocalStrategy(
    {
    usernameField: 'email',
    passwordField: 'password'
    },
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email' })
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: 'Incorrect Password'})
            }
            return done(null, user);
        });
    }
));

module.exports = LocalStrategy;