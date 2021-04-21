const router = require('express').Router();
const appRoutes = require('./appRoutes');
const userAuth = require('./userAuth')

router.use('/', userAuth);
router.use('/', appRoutes);

module.exports = router;