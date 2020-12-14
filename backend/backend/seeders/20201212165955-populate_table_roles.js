'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      description: 'Student',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      description: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date()
    }

  ])
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('roles', null, {});
     
  }
};
