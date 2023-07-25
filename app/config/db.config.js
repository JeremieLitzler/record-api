//For more details, please visit API Reference for the Sequelize constructor > https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor

module.exports = {
  HOST: '',
  PORT: '',
  USER: '',
  PASSWORD: '',
  DB: '',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
