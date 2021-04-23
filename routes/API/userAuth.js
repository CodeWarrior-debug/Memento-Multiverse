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
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log('LOGIN', req.user);
    res.json(req.user);
});

// Route for Logout
router.get('/logout', function (req, res) {
    console.log('You are logged out!');
    req.logout();
    res.sendStatus(200);
})

router.get('/user', async (req, res) => {
    console.log('made it to this route')
    try {
        if (req.user) {
            const userData = {...req.user};
            delete userData.password;
            res.status(200).json(userData);
        } else {
            res.sendStatus(403);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;