'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable("feedbacks",
    {
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

     return queryInterface.dropTable('feedbacks');
    
  }
};
