'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class garage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.garage.hasOne(models.vehicule);
    }
  };
  garage.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    openHour: DataTypes.STRING,
    lockHour: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'garage',
  });
  return garage;
};
