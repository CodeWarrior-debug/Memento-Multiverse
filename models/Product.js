const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id:{
            type: DataTypes.Integer,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        franchise_id:{
            type: DataTypes.Integer,
            allowNull: false
        },
        fake_price:{
            type: DataTypes.number,
            allowNull: false
        },
        name:{
            type: DataTypes.text,
            allowNull: false
        },
        image_link:{
            type: DataTypes.text,
            allowNull: false
        },
        image_name:{
            type: DataTypes.text,
            allowNull: false
        },
        fun_description:{
            type: DataTypes.text,
            allowNull: false
        },
        fake_quantity:{
            type: DataTypes.Integer,
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

module.exports=Product;
