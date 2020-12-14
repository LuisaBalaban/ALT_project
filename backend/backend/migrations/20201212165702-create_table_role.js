'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable("roles",
    {
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
    createdAt:{
      type:Sequelize.DATE
    },
    updatedAt:{
      type:Sequelize.DATE
    }
    })
    
  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.dropTable('roles');
    
  }
};