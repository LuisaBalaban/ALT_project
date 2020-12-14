'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('feedback_types', [{
      description: 'OK',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      description: 'Interesting',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
       description: 'Amazing',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      description: 'Boring',
        createdAt: new Date(),
        updatedAt: new Date()
    }

  ])
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('feedback_types', null, {});
     
  }
};
