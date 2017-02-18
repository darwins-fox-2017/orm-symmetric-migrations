'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn('Students','lastnamae')
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.addColumn('Students','lastnamae',Sequelize.STRING)
  }
};
