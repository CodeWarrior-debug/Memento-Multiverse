const sequelize = require('../config/connection');
const { Product, User, Transaction } = require('../models');

const productsDataSeed = require('./productsDataSeed.json');
const transactionsDataSeed = require('./transactionsDataSeed.json');
const userDataSeed = require('./userDataSeed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const products = await Product.bulkCreate(productsDataSeed);

    const transactions = await Transaction.bulkCreate(transactionsDataSeed);

    const users = await User.bulkCreate(userDataSeed);

    process.exit(0);
}

seedDatabase();