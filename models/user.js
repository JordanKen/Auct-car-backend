'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasOne(models.wallet);
      models.user.hasMany(models.vehicule);
      models.user.hasMany(models.proposition);
      //models.user.hasMany(models.sale);
      models.user.hasMany(models.send);
      models.user.hasMany(models.receive);
      models.user.hasMany(models.purchase);
      models.user.hasOne(models.rapport);
    }
  };
  user.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sexe: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
