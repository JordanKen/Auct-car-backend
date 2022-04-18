'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proposition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.proposition.belongsTo(models.user);
      models.proposition.belongsTo(models.sale);
    }
  };
  proposition.init({
    amount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'proposition',
  });
  return proposition;
};
