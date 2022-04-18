'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rapport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.rapport.belongsTo(models.vehicule)
    }
  };
  rapport.init({
    moteur: DataTypes.STRING,
    carrosserie: DataTypes.STRING,
    amortisseur: DataTypes.STRING,
    etatGeneral: DataTypes.STRING,
    vehiculeId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rapport',
  });
  return rapport;
};
