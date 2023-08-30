//See https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
require('dotenv').config();

const dbConfig = require(`../../../record-api-conf/config/db.config.${process.env.NODE_ENV}.js`);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.records = require('./record.model.js')(sequelize, Sequelize);

module.exports = db;
