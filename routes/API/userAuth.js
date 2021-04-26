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
    console.log('signup route hit!! YAY', req.body);
    try {
        if (!req.body.user_role) req.body.user_role = 'user';
        const user = await db.User.findOne({ where: { email: req.body.user_name } })
        console.log(user)
        if (user) {
            res.json({ msg: 'There is already an account with this email/username' });
        } else {
            console.log('made it in to the else')
            const newUser = await db.User.create(req.body);
            delete newUser.password;
            res.json(newUser)
            res.json({ msg: 'There is already an account with this email/username' });
            
        }
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
        res.json({ msg: 'There is already an account with this email/username' });
    }

});

// Route for Login
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log('LOGIN', req.user);
    const userInfo = {
        user_role: req.user.dataValues.user_role,
        user_name: req.user.dataValues.user_name,
        email: req.user.dataValues.email
    };

    res.json(userInfo);
});

// Route for Logout

// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// })
router.get('/logout', function (req, res) {
    console.log('You are logged out!');
    req.logout();
    res.sendStatus(200);
})

router.get('/user', async (req, res) => {
    console.log('made it to this route', req.session, req.user)
    try {
        if (req.user) {
            const userData = await db.User.findByPk(req.user)
            console.log('LOGIN', req.user);
            const userInfo = {
                user_role: userData.dataValues.user_role,
                user_name: userData.dataValues.user_name,
                email: userData.dataValues.email
            };

            res.json(userInfo);
        }
        else {
            res.sendStatus(403);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;