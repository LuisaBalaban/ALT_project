const Sequelize = require('sequelize');
const sequelize = require('../database/Connection')
//+export ca la user

module.exports = sequelize.define("activities", {
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    description:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    activity_code:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    user_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    date:
    {
        type:Sequelize.DATE,
        allowNull:false
    }
})
