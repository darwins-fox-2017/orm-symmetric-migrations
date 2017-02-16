'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Students','height', Sequelize.STRING
    )
  },
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Students','phone', Sequelize.INTEGER
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
