const router = require('express').Router();
const loginRoutes = require("./loginRoutes");
const logoutRoutes = require('./logoutRoutes');
const shopRoutes = require('./shopRoutes');
const signupRoutes = require('./signupRoutes');
const adminRoutes = require('./adminRoutes');
const consumerRoutes = require('./consumerRoutes');
const userAuth = require('./userAuth');

router.use('/', loginRoutes);
router.use('/', logoutRoutes);
router.use('/', shopRoutes);
router.use('/', shopRoutes);
router.use('/', signupRoutes);
router.use('/', adminRoutes);
router.use('/', consumerRoutes);
router.use('/', userAuth);

module.exports = router;