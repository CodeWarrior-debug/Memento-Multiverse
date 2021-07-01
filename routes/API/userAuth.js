const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require('bcrypt');


router.get("/test", function (req, res) {
  res.json(req.user);
});

// Route for Signup
router.post("/signup", async (req, res) => {
  // console.log("signup route hit!! YAY", req.body);
  console.log('***************************************from 14 uath*', req.body.user_name);
  console.log('*************************************** line 15 ',db.User.findOne({where:{user_name:req.body.user_name}}));
  try {
    if (!req.body.user_role) req.body.user_role = "user";

    const user = await db.User.findOne({
      where: { user_name: req.body.user_name },
    });

    console.log('LINE 22 OF USERAUTH.JS: ', user);

    if (user) {
      res.json({ msg: "There is already an account with this email/user_name" });
    } else {
      const newUser = await db.User.create(req.body);
      delete newUser.password;
      res.json(newUser);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route for Login
router.post("/login", async function (req, res) {
    console.log('***********************************************************', req.body.user_name);
    try {
    const user = await db.User.findOne({ where: {user_name: req.body.user_name } });  //check point of failure

    if (!user) {
      console.log('if !user ************************', user);
      res.status(404).json({ msg: "Login failed." });
      return;
    }
    const password = bcrypt.compare(req.body.password, user.password);
    
    if (!password) {
      res.status(400).json({ msg: "No password match." });
      return;
    }
    res.status(200).json({msg: "YAY Logged In!"}); 
      
  } catch (err) {
      res.status(500).json(err);
      console.log('*************************CATCH ERR', err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy(() => {
          res.status(204).end();
      })
  } else {
      res.status(404).end();
  }
});

router.get("/user", async (req, res) => {
  console.log("made it to this route", req.session, req.user);
  try {
    if (req.user) {
      const userData = await db.User.findByPk(req.user);
      console.log("LOGIN", req.user);
      const userInfo = {
        user_role: userData.dataValues.user_role,
        user_name: userData.dataValues.user_name,
        email: userData.dataValues.email,
      };

      res.json(userInfo);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
