'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bidBelong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.bidBelong.belongsTo(models.user);
      models.bidBelong.belongsTo(models.sale);
    }
  };
  bidBelong.init({
    userId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bidBelong',
  });
  return bidBelong;
};
