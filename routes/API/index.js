const router = require('express').Router();
const cartRoutes = require('./cartRoutes');  //TODO will this be local storage or DB table?
const franchiseRoutes = require('./franchiseRoutes');
const productRoutes = require('./productRoutes');
const transactionRoutes = require('./transactionRoutes');
const userAuth = require('./userAuth');
//TODO do we need a User route, that does not consider Authentication?


router.use('/users', userAuth);
router.use('/products', productRoutes);
router.use('/transactions', transactionRoutes);
router.use('/cart', cartRoutes); //TODO will this be local storage or DB table?
// router.use('/userAuth', userAuthRoutes);
router.use('/franchise', franchiseRoutes);


module.exports = router;