const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Franchise extends Model {}

Franchise.init(
    {
        idFranchise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        logo: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'franchise',
    }
);

module.exports = Franchise;