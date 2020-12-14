'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("activities",
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
   return queryInterface.dropTable("activities");
  }
};
