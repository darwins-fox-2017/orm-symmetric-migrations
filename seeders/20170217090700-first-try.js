'use strict';
let db = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return new Promise(function (resolve, reject) {
      db.Student.findAll()
      .then(function(result) {
        let tempFullName = 0
        result.forEach(function(data) {
          let fullName = `${data.first_name} ${data.last_name}`
          console.log(fullName);
          db.Student.update({
            name: fullName,
          }, {
            where: { id: data.id }
          })
          .then(function() {
            tempFullName++
          })
        })

        if(tempFullName == result.length) {
          resolve(result);
        }
      })
      .catch(function() {
        reject(`failed`)
      })
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
