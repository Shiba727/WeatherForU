'use strict';
module.exports = (sequelize, DataTypes) => {
  var Weathers = sequelize.define('Weathers', {
    cityname: DataTypes.STRING,
    temp: DataTypes.STRING,
    rain: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Weathers;
};