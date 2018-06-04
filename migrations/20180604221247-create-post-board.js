'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post-Boards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      postId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Posts',
          key: 'id'
        },
        allowNull: false
      },
      boardId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Boards',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post-Boards');
  }
};