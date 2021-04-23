const router = require('express').Router();
const { delete } = require('.');
const User = require('../../models/User');

// Get one user
router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Create a new User
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// Delete password on callback if the user is signed in
  router.get('/user', async (req, res) => {
      try{
          if(req.session.logged_in) {
              const userData = await User.findByPk(req.session.user_id);
              delete userData.dataValues.password;
          } 
          res.status(200).json(userData);
      } catch (err) {
          res.status(500).json(err);
      }
  });
