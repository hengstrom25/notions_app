'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RowCounters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      count: {
        allowNull: false,
        default: 0,
        type: Sequelize.INTEGER
      },
      projectId: {
        allowNull: false,
        references: {
          model: 'Projects',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        default: 'Row Counter',
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
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
    },
    {
      indexes: [
        {
          unique: false,
          fields: ["projectId"]
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RowCounters');
  }
};