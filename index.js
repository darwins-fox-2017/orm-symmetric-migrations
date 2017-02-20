'use strict'
var db = require('./models');

// db.Student.create({ firstname: 'rudi', lastname: 'kurniawan', birthdate:'1994-02-01', email:'ruddd@gmail.com', height:165, phone:"089694026806"})
// .then(function(student) {
//   console.log('added');
// }).catch(function (err) {
//   console.log(err.message);
// });


// db.Student.bulkCreate([
//   { firstname: 'bowo', lastname: 'wiranto', birthdate:'1989-04-01'},
//   { firstname: 'mumun', lastname: 'irawan', birthdate:'1997-10-23'},
//   { firstname: 'rojak', lastname: 'deden', birthdate:'1990-02-17'}
// ]).then(function(students) {
// console.log(students);
// })

// db.Student.findById(31).then(function(student){
//    console.log(student.getAge());
// })


db.Student.getAllData(function(students){
  console.log("DATA STUDENTS\n");
  students.forEach(function(student){
    console.log(`nama : ${student.name}`)
    console.log(`umur : ${student.getAge()}\n`);
  })
})

db.Student.findAll().then(function(students){
    students.forEach(function(student){
    student.update({name : student.getFullName()})
  })
})
