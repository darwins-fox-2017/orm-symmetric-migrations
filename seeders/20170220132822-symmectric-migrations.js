'use strict';

let Model = require("../models")

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
    return new Promise(function(res, rej) {
      Model.Student.findAll().then(function(student){
        let data = student.map(function(index) {
          return new Promise(function(res, rej) {
            let newData = {}
            newData['id'] = index.id
            newData['name'] = index.getFullName()
            Model.Student.update({name: newData.name}, {where:{id : newData.id}}).then(function(student){
              res(student)
            }).catch(function(error){
              rej(error)
            })
          })
        })
        Promise.all(data).then(function(){
          console.log('Updating success!!');
          res()
        }).catch(function(error){
          rej(error)
        })
      })
    })
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
