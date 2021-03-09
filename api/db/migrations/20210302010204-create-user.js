'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
      ravelryToken: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      ravelryRefreshToken: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ravelryUser: {
        allowNull: false,
        type: Sequelize.JSONB
      }
    }, {
      uniqueKeys: {
        users_username_unique: {
          fields: ['username']
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
