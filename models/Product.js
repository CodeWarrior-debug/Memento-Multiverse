const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        franchise_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fake_price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image_link: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fun_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fake_quantity: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;
