'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn("Students","firstName", "Name")
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn("Students","Name", "firstName")
  }
};
