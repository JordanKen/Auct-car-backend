'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      models.vehicule.belongsTo(models.garage);
      models.vehicule.belongsTo(models.user);
      models.vehicule.belongsTo(models.marque);
      models.vehicule.belongsTo(models.gabarit);
      models.vehicule.hasMany(models.sale);
    }
  };
  vehicule.init({
    name: DataTypes.STRING,
    manufacturateYear: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    color: DataTypes.STRING,
    isSale: DataTypes.BOOLEAN,
    engine: DataTypes.STRING,
    isNew: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    marqueId: DataTypes.INTEGER,
    gabaritId: DataTypes.INTEGER,
    garageId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'vehicule',underscored:false
  });
  return vehicule;
};
