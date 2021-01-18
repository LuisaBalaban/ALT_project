'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('feedbacks', [
     {
      type_id:1,
      user_id:1,
      activity_id:1

     
    },
    {
      type_id:2,
      user_id:1,
      activity_id:1

    },
    {
      type_id:3,
      user_id:1,
      activity_id:1

    },
    {
      type_id:3,
      user_id:3,
      activity_id:1
    },
    {
      type_id:3,
      user_id:4,
      activity_id:1

    },
    {
      type_id:1,
      user_id:1,
      activity_id:2

    },
    {
      type_id:2,
      user_id:4,
      activity_id:3
    },
    {
      type_id:3,
      user_id:4,
      activity_id:3
    },
    {
      type_id:3,
      user_id:4,
      activity_id:4

    },
    {
      type_id:3,
      user_id:1,
      activity_id:5

    },
    {
      type_id:3,
      user_id:3,
      activity_id:5

    },
    {
      type_id:3,
      user_id:3,
      activity_id:5

    },
    {
      type_id:2,
      user_id:3,
      activity_id:5

    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('feedbacks', null, {});
     
  }
};