'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.receive.belongsTo(models.user);
    }
  };
  receive.init({
    user_id: DataTypes.INTEGER,
    send_id: DataTypes.INTEGER,
    from_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'receive',
  });
  return receive;
};
