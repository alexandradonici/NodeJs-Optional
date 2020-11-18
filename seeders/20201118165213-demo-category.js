'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [
      {
        Name: 'fruits',
        Description:'',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'sweets',
        Description:'',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  
    ];
     await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Categories', null, {});
  }
};
