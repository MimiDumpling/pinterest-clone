const Sequelize = require( 'sequelize' );

const Post = sequelize.define('post', {
  identifier: { 
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING
  },
  caption: {
    type: Sequelize.STRING
  },
});

Post.belongsToMany( Board, { through: 'BoardPost' } );
Post.sync({ force: true });

module.exports = Post;