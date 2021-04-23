const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
// const PORT = process.env.PORT || 3001

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user.id);
});

passport.use('local', new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = await User.findOne({ where: { user_name: username } });
            console.log('this passport has been hit', username, password);
            if (!user) {
                return done(null, false, { message: 'Incorrect Username' })
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: 'Incorrect Password' })
            }
            return done(null, user);
        } catch (err) {
            console.log(err);
            return done(err, null);
        }
    }
));

module.exports = passport;