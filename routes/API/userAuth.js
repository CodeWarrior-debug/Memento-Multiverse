const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('../../passport');

router.get('/test', function (req, res) {
    res.json(req.user);
});

// Route for Signup
router.post('/signup', function (req, res) {
    db.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user) {
            res.json({ msg: 'There is already an account with this email' });
        } else {
            db.User.create(req.body).then(function () {
                res.redirect('/login')
            });
        }
    });
});

// Route for Login
router.post('/login', 
passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/login',
failureFlash: true })),
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