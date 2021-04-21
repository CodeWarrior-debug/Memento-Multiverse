const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy(
    {
    usernameField: 'email',
    passwordField: 'password'
    },
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
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