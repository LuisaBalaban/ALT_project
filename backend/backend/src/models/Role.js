const Sequelize = require('sequelize');
const sequelize = require('../database/Connection')

module.exports = sequelize.define("roles", {
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    description:{
        type:Sequelize.STRING(50),
        allowNull:false
    }
 
})
