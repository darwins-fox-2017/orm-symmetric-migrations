'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

  return queryInterface.addColumn('Students','fullname',Sequelize.STRING)
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn('Students','fullname')
  }
};
