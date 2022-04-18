'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      startHour: {
        type: Sequelize.DATE
      },
      endHour: {
        type: Sequelize.DATE
      },
      vehiculeId: {
        type: Sequelize.INTEGER,
        references:{
          model:'vehicule',
          key:'id'
        }
      },
      initPrice: {
        type: Sequelize.INTEGER
      },
      finalPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
