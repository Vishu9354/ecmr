const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Wallet = sequelize.define('Wallet', {
  customer_id: { type: DataTypes.INTEGER, primaryKey: true },
  balance: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.0 },
});
module.exports = Wallet;