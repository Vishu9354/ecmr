const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ERD_project', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Connection error:', err));
module.exports = sequelize;