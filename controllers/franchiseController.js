const db = require("../models");

module.exports = {
    find: async function(req, res){
        try {
            const franchises = await db.Franchise.findAll();
            res.json(franchises);
        } catch (error) {
           console.log(error);
           res.status(404);
        }
    }
}