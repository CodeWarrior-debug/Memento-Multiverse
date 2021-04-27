const {Transaction} = require("../models");

module.exports = {
  findAllTransactions: function (req, res) {
    Transaction.findAll()
      .then((transactionDB) => {
        res.json(transactionDB);
      })
      .catch((err) => {
        console.log(err);
      });
  },

//   // CREATE a book
// router.post('/', (req, res) => {
//     Book.create(req.body)
//       .then((newBook) => {
//         res.json(newBook);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });



  create: function (req, res) {
    console.log("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOG", req.body);
    Transaction.create(
    // product_id: req.body.product_id,
    // quantity: req.body.quantity,
    // franchise_id: req.body.franchise_id,
    // price: req.body.fake_price,
    // user_id: req.body.user_id,
    req.body
    )
    .then((newTransaction) => {
        res.json(newTransaction);
    })
    .catch((err) => {
        console.log(err);
    });
  },
};
