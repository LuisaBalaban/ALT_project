const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://user:1234@localhost:3306/AltDb');
sequelize.authenticate().then(() => {
    console.log("Connected to database")
  }).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
  })
  

module.exports = sequelize;
global.sequelize = sequelize;