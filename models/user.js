const Sequelize = require( 'sequelize' );

const User = sequelize.define('user', {
  identifier: { 
    type: Sequelize.BIGINT, 
    primaryKey: true, 
  },  
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  //password?? Lookup Passport
});

User.hasOne( Board );
User.sync({ force: true });

module.exports = User;