'use strict';
module.exports = (sequelize, DataTypes) => {
  var Test = sequelize.define('Test', {
    test: DataTypes.STRING
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};