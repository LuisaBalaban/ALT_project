'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('activities', [
     {
      description:"HELLO FROM SEEDERS",
      activity_code:111,
      user_id:2,
      date : new Date("01/02/2021")
    },
    {
      description:"ACTIVITY2",
      activity_code:222,
      user_id:2,
      date : new Date("02/02/2021")
    },
    {
      description:"ACTIVITY3",
      activity_code:333,
      user_id:5,
      date : new Date("03/02/2021")
    },
    {
      description:"ACTIVITY4",
      activity_code:444,
      user_id:5,
      date : new Date("04/02/2021")
    },
    {
      description:"ACTIVITY5",
      activity_code:555,
      user_id:5,
      date : new Date("05/02/2021")
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('activities', null, {});
     
  }
};
