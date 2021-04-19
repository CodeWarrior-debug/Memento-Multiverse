const { json } = require("sequelize/types");
const db = require("../models");

// Creating the cart for the user
const cart = {
    create: function (req, res) {
        if (req.user) {
            console.log('Adding Item(s) to Cart');
            db.Cart.findOneAndUpdate(
            {
                user: req.user.id,
                item: req.body.itemId
    
            },
            )
                .then((cartItem) => {
                    console.log('This is your cart: ', cartItem);
                    if (cartItem === null) {
                        console.log('Adding new item to Cart');
                        db.Cart.create({
                            user: user.req.id,
                            item: item.req.itemId,
                            orderQty: req.body.quantity,
                        })
                    }
                }).then(() => {
                    res.sendStatus(200);
                })
                .catch((err) => {
                    console.log(err);
                });
            } else {
                res.sendStatus(403);
                console.log("cartController: User is not logged in");
            }
    }, 

    deleteOne: function (req, res) {
        console.log("Requested item from delete", req);
        if (req.user) {
            console.log("This is the item to be deleted", req.params.id);

            const itemDelete = req.params.id;
            db.Cart.deleteOne(itemDelete)
            .then(cartdb)
        }
    }
}





