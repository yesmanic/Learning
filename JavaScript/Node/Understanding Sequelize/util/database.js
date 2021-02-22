const Sequelize = require('sequelize');

const config = require('./config.json');

const sequelize = new Sequelize('node-complete', 'root', config.password, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;