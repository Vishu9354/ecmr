const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Product = sequelize.define('Product', {
  product_id: { type: DataTypes.INTEGER, primaryKey: true },
  product_name: { type: DataTypes.STRING, allowNull: false },
  product_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  product_status: { type: DataTypes.BOOLEAN, allowNull: false },
});
module.exports = Product;