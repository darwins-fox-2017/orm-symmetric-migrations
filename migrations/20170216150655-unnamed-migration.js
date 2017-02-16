'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students','firstname')
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Students','firstname',Sequelize.STRING)
  }
};
