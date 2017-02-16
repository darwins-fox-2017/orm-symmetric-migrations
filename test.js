"use strict"
let db = require('./models');

db.Student.findAll().then(function(result){
  //console.log(result.first_name);
  result.forEach(function(data){
    let fullName = `${data.first_name} ${data.last_name}`
    db.Student.update({ name: fullName, }, { where: { id: data.id } });
  })
})



// db.Student.findAll().then(function(students){
//     students.forEach(function(student){
//     student.update({name : student.getFullName()})
//   })
// })
