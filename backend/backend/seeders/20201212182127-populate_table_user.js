'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
     {
      username:"user1",
      password:"parola1",
      email:"user1@email.com",
      name:"User1 user1",
      roleId:1
    },
    {
      username:"user2",
      password:"parola2",
      email:"user2@email.com",
      name:"User2 user2",
      roleId:2
    },
    {
      username:"user3",
      password:"parola3",
      email:"user3@email.com",
      name:"User3 user3",
      roleId:1
    },
    {
      username:"user4",
      password:"parola4",
      email:"user4@email.com",
      name:"User4 user4",
      roleId:1
    },
    {
      username:"user5",
      password:"parola5",
      email:"user5@email.com",
      name:"User5 user5",
      roleId:2
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('users', null, {});
     
  }
};
