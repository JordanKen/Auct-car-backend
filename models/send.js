'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class send extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.send.belongsTo(models.user);
    }
  };
  send.init({
    user_id: DataTypes.INTEGER,
    receive_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'send',
  });
  return send;
};
