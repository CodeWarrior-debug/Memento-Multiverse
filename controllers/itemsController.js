const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Product
          .findAll()
          .then(ItemDB => {
              console.log(ItemDB);
              res.json(ItemDB);
          })
          .catch((err) => {
              console.log(err);
          })
    },

    findOne: function(req,res) {
        db.Product
          .findByPk(req.params.ItemId)
          .then(getOneItem => {
            console.log('Your requested item: ', getOneItem);
            res.json(getOneItem);
          })
          .catch(err => {
              console.log(err);
          })
    }
}
