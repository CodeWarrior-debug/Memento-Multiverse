const db = require("../models");

module.exports = {
    findFranchiseProducts: function(req, res) {
        db.Product.findAll({
            where: {
              franchiseId: (req.params.franchiseId)
            }
          })
        //   .findAll()
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
