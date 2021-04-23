const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/test', function (req, res) {
    res.json(req.user);
});

// Route for Signup
router.post('/signup', async (req, res) => {
    console.log('signup route hit!! YAY');
    try {
        const user = await db.User.findOne({ where: { email: req.body.email } })
        console.log(user)
        if (user) {
            res.json({ msg: 'There is already an account with this email' });
        } else {
            console.log('made it in to the else')
            const newUser = await db.User.create(req.body);
            delete newUser.password;
            res.json(newUser)

        }

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

// Route for Login
router.post('/login',
    passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })),
    function (req, res) {
        console.log('login');
        res.json(req.user);
    };

// Route for Logout
router.get('/logout', function (req, res) {
    console.log('You are logged out!');
    req.logout();
    res.sendStatus(200);
})

router.get('/user', async (req, res) => {
    console.log('made it to this route')
    try {
        if (req.session.logged_in) {
            const userData = await User.findByPk(req.session.user_id);
            delete userData.dataValues.password;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;