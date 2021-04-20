const Product = require('./Product');
const Transaction = require('./Transaction');
const User = require('./User');
const Franchise = require('./Franchise');

Franchise.hasMany(Product);
Product.belongsTo(Franchise,{
    foreignKey: 'franchise_id'
});

User.hasMany(Transaction);
Transaction.belongsTo(User,{
    foreignKey: 'user_id',
  });

Transaction.hasOne(Product, {
    foreignKey: 'product_id'
});


module.exports = { User, Transaction, Product, Franchise };