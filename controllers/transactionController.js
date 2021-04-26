const db = require("../models");

module.exports = {

    findAllTransactions: function(req, res) {
        db.Transaction.findAll()
          .then(transactionDB => {
              //console.log(transactionDB);
              res.json(transactionDB);
          })
          .catch((err) => {
              //console.log(err);
          })
    },
//TODO get this one set up
    findOne: function(req,res) {
        db.Product
          .findByPk(req.params.ItemId)
          .then(getOneItem => {
            //console.log('Your requested item: ', getOneItem);
            res.json(getOneItem);
          })
          .catch(err => {
              //console.log(err);
          })
    }
}
