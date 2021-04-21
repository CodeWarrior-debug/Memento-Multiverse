const router = require('express').Router();
const appRoutes = require('./appRoutes');
const userAuth = require('./userAuth')

router.use('/users', userAuth);
router.use('/products', appRoutes);

module.exports = router;