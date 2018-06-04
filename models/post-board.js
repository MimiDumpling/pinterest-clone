'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post - Board = sequelize.define('Post-Board', {
    id: DataTypes.BIGINT
  }, {});
  Post - Board.associate = function(models) {
    // associations can be defined here
  };
  return Post - Board;
};