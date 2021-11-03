'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeConstraint('RowCounters', 'RowCounters_projectId_fkey')

    await queryInterface.renameColumn('RowCounters', 'projectId', 'ravelryProjectId')
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.renameColumn('RowCounters', 'ravelryProjectId', 'projectId')
  }
};
