'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Students","lastName")
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("Students","lastName",{type:Sequelize.STRING})
  }
};
