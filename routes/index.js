const router = require('express').Router();
const loginRoutes = require("./loginRoutes.js");
const logoutRoutes = require('./logoutRoutes.js');
const shopRoutes = require('./shopRoutes.js');
const signupRoutes = require('./signupRoutes.js');
const adminRoutes = require('./adminRoutes.js');
const consumerRoutes = require('./consumerRoutes.js');
const userAuth = require('./userAuth.js');
const orderRoutes = requre('./orderRoutes.js');
const apiRoutes = require('./api')

router.use('/', loginRoutes);
router.use('/', logoutRoutes);
router.use('/', shopRoutes);
router.use('/', signupRoutes);
router.use('/', adminRoutes);
router.use('/', consumerRoutes);
router.use('/', userAuth);
router.use('/', orderRoutes);
router.use('/', apiRoutes);

module.exports = router;