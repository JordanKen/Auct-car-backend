'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.purchase.belongsTo(models.user);
      models.purchase.belongsTo(models.sale);
      models.purchase.belongsTo(models.vehicule);
    }
  };
  purchase.init({
    user_id: DataTypes.INTEGER,
    vehicule_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    sale_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'purchase',
  });
  return purchase;
};
