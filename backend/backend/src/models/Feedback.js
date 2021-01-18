const Sequelize = require('sequelize');
const sequelize = require('../database/Connection')
//+ export ca la user

module.exports = sequelize.define("feedbacks", {
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    type_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    user_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    activity_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
    // date:
    // {
    //     type:Sequelize.DATE,
    //     allowNull:false
    // }
})

