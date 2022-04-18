'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.sale.hasMany(models.proposition);
      models.sale.belongsTo(models.vehicule);
      //models.sale.belongsTo(models.user);
    }
  };
  sale.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    startHour: DataTypes.STRING,
    endHour: DataTypes.STRING,
    vehiculeId: DataTypes.INTEGER,
    initPrice: DataTypes.INTEGER,
    finalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};
