const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false },
        picture: { type: DataTypes.STRING, allowNull: true },
    }

    return sequelize.define('Product', attributes);
}