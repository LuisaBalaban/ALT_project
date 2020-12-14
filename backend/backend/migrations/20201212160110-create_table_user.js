'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable("users",{
      id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    password:{
        type:Sequelize.STRING(10),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    roleId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    createdAt:{
      type:Sequelize.DATE
    },
    updatedAt:{
      type:Sequelize.DATE
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("users");
  }
};
