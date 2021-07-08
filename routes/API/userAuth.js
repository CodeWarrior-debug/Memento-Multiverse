const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require('bcrypt');

// Route for Signup
router.post("/signup", async (req, res) => {
  try {
    if (!req.body.user_role) req.body.user_role = "user";

    const user = await db.User.findOne({
      where: { user_name: req.body.user_name },
    });

    if (user) {
      res.json({ msg: "There is already an account with this email/user_name" });
    } else {
      const newUser = await db.User.create(req.body);
      delete newUser.password;

      req.session.user_id=newUser.id;
      req.session.logged_in= true;
      req.session.user_name = newUser.user_name;

      res.json(newUser);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route for Login
router.post("/login", async function (req, res) {
    try {
    const user = await db.User.findOne({ where: {user_name: req.body.user_name } });  //check point of failure

    if (!user) {
      res.status(404).json({ msg: "Login failed." });
      return;
    }

    const password = bcrypt.compare(req.body.password, user.password);
    
    if (!password) {
      res.status(400).json({ msg: "No password match." });
      return;
    }
    
    const userData=JSON.parse(JSON.stringify(user));

    req.session.user_id=userData.id;
    req.session.logged_in= true;
    req.session.user_name = userData.user_name;
    
    res.json({ user: user});
      
  } catch (err) {
      res.status(500).json(err);
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
  console.log('************************************before try', req.session,req.session.user_id);
try{
  if (req.session.logged_in){
    const userData = await db.User.findByPk(req.session.user_id);
    const userInfo= {
      role: userData.dataValues.role,
      user_name: userData.dataValues.user_name,
      email: userData.dataValues.email,
      logged_in: true
    };
    res.json(userInfo);
  } else {
    res.status(403).json({ message: "You shall not pass! You can't log in now!"})
  }
  
} catch (err) {
  console.log(err);
}
});

module.exports = router;
