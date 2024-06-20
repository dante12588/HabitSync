const { Sequelize } = require('sequelize');
require('dotenv').config();  // Wczytaj zmienne środowiskowe z pliku .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule: require('mysql2'),  // Wskazanie Sequelize, aby używał mysql2
});

module.exports = sequelize;