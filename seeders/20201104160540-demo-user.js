'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const mockUsers = [
      {
        firstName: "Alexandra",
        lastName: "Donici",
        email: "alexandra.donici@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    const mockUsers1 = [];

    for(let i=0; i<=100; i++)
    {
     mockUsers1.push({
       firstName: faker.name.firstName(),
       lastName: faker.name.lastName(),
       email: faker.internet.email(),
       password: "test123",
       createdAt: new Date(),
      updatedAt: new Date(),
       
     });
    }
    await queryInterface.bulkInsert('Users', mockUsers1, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Users', null, {});
  }
};
