'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('vehicules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            manufacturateYear: {
                type: Sequelize.DATE
            },
            isNew: {
                type: Sequelize.BOOLEAN
            },
            engine: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            mileage: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.INTEGER
            },
            color: {
                type: Sequelize.STRING
            },
            isSale: {
                type: Sequelize.BOOLEAN
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            marqueId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'marque',
                    key: 'id'
                }
            },
            gabaritId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'gabarit',
                    key: 'id'
                }
            },
            garageId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'garage',
                    key: 'id'
                }
            },
            avatar: {
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
        await queryInterface.dropTable('vehicules');
    }
};
