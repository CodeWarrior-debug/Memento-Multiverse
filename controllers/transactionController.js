const db = require("../models");

module.exports = {
  findAllTransactions: function (req, res) {
    db.Transaction.findAll()
      .then((transactionDB) => {
        res.json(transactionDB);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  create: function (req, res) {
    console.log(req.body);
    db.Transaction.create({
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      franchise_id: req.body.franchise_id,
      price: req.body.fake_price,
      user_id: req.body.user_id,
    })
      .then(() => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
