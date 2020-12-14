const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:newpass@localhost:3306/AltDb');

module.exports = sequelize;
global.sequelize = sequelize;