const router = require('express').Router();
const itemsController = require('../controllers/itemsController');
const cartController = require('../controllers/cartController');

// Routing to the homepage and a get to get all items in the database using the controllers

router.route('/allproducts').get(itemsController.findAll);

router.route('/item/:ItemId').get(itemsController.findOne);

router.route('/addToCart').post(cartController.create);

router.route('/userCart/:id').get(cartController.findOne);

router.route('/deletecart/:id').delete(cartController.deleteOne);

router.route('/updateCartQty').put(cartController.updateOne);

router.route('/completeOrder').post(cartController.createOrder);

module.exports = router;