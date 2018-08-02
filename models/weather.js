'use strict';
module.exports = (sequelize, DataTypes) => {
  var Weathers = sequelize.define('Weathers', {
    cityname: DataTypes.STRING,
    temp: DataTypes.STRING,
<<<<<<< HEAD
    rain: DataTypes.STRING,
    status: DataTypes.STRING
=======
    rain: DataTypes.STRING
>>>>>>> origin/revised_sql
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Weathers;
};