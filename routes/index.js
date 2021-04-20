const router = require('express').Router();
<<<<<<< HEAD
const loginRoutes = require("./loginRoutes");
const logoutRoutes = require('./logoutRoutes');
const shopRoutes = require('./shopRoutes');
const signupRoutes = require('./signupRoutes');
const adminRoutes = require('./adminRoutes');
const consumerRoutes = require('./consumerRoutes');
const userAuth = require('./userAuth');
const orderRoutes = requre('./orderRoutes');
=======
const loginRoutes = require("./loginRoutes.js");
const logoutRoutes = require('./logoutRoutes.js');
const shopRoutes = require('./shopRoutes.js');
const signupRoutes = require('./signupRoutes.js');
const adminRoutes = require('./adminRoutes.js');
const consumerRoutes = require('./consumerRoutes.js');
const userAuth = require('./userAuth.js');
const orderRoutes = requre('./orderRoutes.js');
>>>>>>> main
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