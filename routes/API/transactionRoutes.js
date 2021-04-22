const router = require('express').Router();
const transactionController = require('../../controllers/transactionController');


// Routing to the homepage and a get to get all/some transactions in the database using the controllers

router.route('/').get(transactionController.findAllTransactions);

// router.route('/:ItemId').get(itemsController.findOne);

// router.route('/').post(cartController.create);

//router.route('/userCart/:id').get(cartController.findOne);

// router.route('/:id').delete(cartController.deleteOne);

// router.route('/').put(cartController.updateOne);

// router.route('/completeOrder').post(cartController.createOrder);

module.exports = router;