const Sequelize = require( 'sequelize' );

const Post = sequelize.define('post', {
  identifier: { 
    type: Sequelize.STRING, 
    primaryKey: true 
  },
  link: {
    type: Sequelize.STRING
  },
  caption: {
    type: Sequelize.TEXT
  }
});

Post.belongsToMany( Board, { through: 'BoardPost' } );
Post.sync({ force: true });

module.exports = Post;