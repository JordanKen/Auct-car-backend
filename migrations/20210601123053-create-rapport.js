'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rapports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      moteur: {
        type: Sequelize.STRING
      },
      vehiculeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicule',
          key: 'id'
        }
      },
      carrosserie: {
        type: Sequelize.STRING
      },
      amortisseur: {
        type: Sequelize.STRING
      },
      etatGeneral: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('rapports');
  }
};
