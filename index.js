"use strict"

let Model = require ('./models')

// Access from instanceMethods
Model.Student.findAll().then(function(students) {
  console.log();
  console.log('Access from instanceMethods : ');
  students.forEach(function(s) {
    console.log(`Umur ${s.getFullName()} sekarang ${s.getAge()} tahun`);
  })
})

// Access from classMethod
Model.Student.getAllData(function(students) {
  console.log();
  console.log('Access from classMethods : ');
  students.forEach(function(student) {
    console.log(`ID : ${student.id}`);
    console.log(`Firstname : ${student.firstname}`);
    console.log(`Lastname : ${student.lastname}`);
    console.log(`Birthdate : ${student.birthdate}`);
    console.log(`Created at : ${student.createdAt}`);
    console.log(`Updated at : ${student.updatedAt}`);
  })
})

// Seed Data
// Model.Student.create({firstname : 'Tukul', lastname : 'Arwana', birthdate : new Date(), email : 'tukularwanam', phone : '08126665664', height : 170 }).then(function(data){
//   console.log(`Insert Data Success!!!`);
// }).catch(function(err){
//   console.log(err);
// })
