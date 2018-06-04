const Sequelize = require( 'sequelize' );
const { sequelize } = require( './index.js' );

const Board = sequelize.define('board', {
  identifier: { 
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  parentId: {
    type: Sequelize.INTEGER
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    },
  },
});

Board.belongsToMany( Post, { through: 'BoardPost' } );
Board.sync({ force: true });

module.exports = Board;