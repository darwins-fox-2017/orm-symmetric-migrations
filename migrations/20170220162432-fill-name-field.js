'use strict';

const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return new Promise(function(res, rej){
      models.Students.findAll().then(function(students){
        let promises = students.map(function(student){
          return new Promise(function(resolve, reject){
            console.log(student.id);
            models.Students.update({
              name: student.getFullName()
            }, {
              where: {
                id: student.id
              }
            }).then(function(updatedData){
              resolve(updatedData)
            }).catch(function(err){
              reject(err)
            })
          })
        })

        Promise.all(promises).then(function(){
          console.log('Turning firstName and lastName into fullname was successfully');
          res()
        }).catch(function(err){
          rej(err)
        })
      })
    })
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
