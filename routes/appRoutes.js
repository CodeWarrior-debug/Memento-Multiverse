const router = require('express').Router();
const itemsController = require('../controllers/itemsController');
const cartController = require('../controllers/cartController');

// Routing to the homepage and a get to get all items in the database using the controllers

router.route('/allproducts').get(itemsController.findAll);

router.route('/item/:ItemId').get(itemsController.findOne);