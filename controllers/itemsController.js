const db = require("../models");

module.exports = {
    findAll: function(res, req) {
        db.Item 
          .find(req.query)
          .then(ItemDB => {
              console.log(ItemDB);
              res.json(ItemDB);
          })
          .catch((err) => {
              console.log(err);
          })
    },

    findOne: function(res,req) {
        db.Item
          .find(req.query)
          .then(getOneItem => {
            console.log('Your requested item: ', getOneItem);
            res.json(getOneItem);
          })
          .catch(err => {
              console.log(err);
          })
    }
}

module.exports = Items;