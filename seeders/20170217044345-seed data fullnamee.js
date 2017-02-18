'use strict';
let  model = require('../models');
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
    return   new Promise(function(res,rej){
      model.Student.findAll().then(function(students) {
            var promises = students.map(function(student) {
               return new Promise(function(resolve,reject){
                let newstudent = {};
                newstudent['id'] = student.id;
                newstudent['fullname'] = student.getFullName();
                model.Student.update({
                  fullname:newstudent.fullname
                },{
                  where:{
                    id:newstudent.id
                  }
                }).then(function(updateddata){
                  resolve(updateddata)
                }).catch(function(err){
                  reject(err)
                })
              })
            })

            Promise.all(promises).then(function(){
              console.log('maping success')
              res()
            }).catch(function(err){
              rej("")
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
