'use strict';

let db = require("./models")

module.exports = {
  up: function (queryInterface, Sequelize) {
    return new Promise(function(res, rej){
      db.Student.findAll().then(function(data){
        let result = data.map(function(index){
          return new Promise(function(res, rej){
            let newData = {}
            newData.id = index.id,
            newData.Name = index.getFullName()
            db.Student.update({
              Name : newData.Name
            },{
              where:{
                id:newData.id
              }
            }).then(function(data){
              res(data)
            }).catch(function(err){
              rej(err)
            })
          })
        })
        Promise.all(result).then(function(){
          console.log(`Change has been successful`)
          res()
        }).then(function(err){
          rej(err)
        })
      })
    })
  },
  down: function (queryInterface, Sequelize) {

  }
};
