"use strict"
let db = require('./models');

function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
            db.Student.findAll()
            .then(function(result) {
              let tempFullName = 0
              result.forEach(function(data) {
                let fullName = `${data.first_name} ${data.last_name}`
                db.Student.update({ name: fullName, }, { where: { id: data.id } })
                .then(function() {
                  tempFullName++
                })
              })
              if(tempFullName == result.length) {
                resolve(result);
              }
            })
            .catch(
              reject(`failed`)
            )
        });
}

asyncFunc()



// db.Student.findAll().then(function(result){
//   //console.log(result.first_name);
//   result.forEach(function(data){
//     let fullName = `${data.first_name} ${data.last_name}`
//     db.Student.update({ name: fullName, }, { where: { id: data.id } });
//   })
// })
