'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userName: 'John',
        createdAt: '2018-06-04 14:01:45',
        updatedAt: '2018-06-04 14:01:45',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};