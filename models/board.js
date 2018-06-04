const Sequelize = require( 'sequelize' );
const { sequelize } = require( './index.js' );

const Board = sequelize.define('board', {
  identifier: { 
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  parentId: {
    type: Sequelize.INTEGER
  }
});

Board.belongsToMany( Post, { through: 'BoardPost' } );
Board.sync({ force: true });

module.exports = Board;