const Sequelize = require( 'sequelize' );

const User = sequelize.define('user', {
  identifier: { 
    type: Sequelize.STRING, 
    primaryKey: true, 
  },  
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  //password?? Lookup Passport
  boardId: {
    type: Sequelize.INTEGER
  }
});

User.hasOne( Board );
User.sync({ force: true });

module.exports = User;