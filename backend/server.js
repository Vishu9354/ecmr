const express = require('express');
const sequelize = require('./db');
const productRoutes = require('./routes/products');
const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);
sequelize.sync().then(() => console.log('Database synced'));
app.listen(5000, () => console.log('Server running on http://localhost:5000'));