const router = require('express').Router();
const appRoutes = require('./appRoutes');
const transactionRoutes = require('./transactionRoutes');
//const userAuth = require('./userAuth')

//router.use('/users', userAuth);
router.use('/products', appRoutes);
router.use('/transactions', transactionRoutes);


module.exports = router;