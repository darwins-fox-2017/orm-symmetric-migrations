"use strict"

const db = require("./models")

// add data (email, height, phone):
// db.Students.create({
//   name:'Isumizumi', address:'Jalan Baru No. 1'
// }).then(function(data) {
//   console.log("Success record data", data);
// }).catch(function(err) {
// console.log(err.message);
// })

// db.Students.create({
//   name:'Aurora', address:'Kolong Langit No. 1'
// }).then(function(data) {
//   console.log("Success record data", data);
// }).catch(function(err) {
// console.log(err.message);
// })

db.Students.create({
  name:'Diandra', address:'Kolong Langit Tingkat 7'
}).then(function(data) {
  console.log("Success record data", data);
}).catch(function(err) {
console.log(err.message);
})

db.Students.findAll().then(function(data){
  data.forEach(function(data){
    data.update({
      name: data.getFullName()
    })
  })
})

// db.Students.create({ first_name: 'Isumi', last_name: 'Karina', birthdate: '1989-02-07'})
// .then(function(task) {
//   console.log(task.get('first_name'))
// })

//Contoh data (email, height, phone) yang valid:
// db.Students.create({
//   first_name:'Karina', last_name:'putri', birthdate:'1989-02-07', email:'karina@gmail.com', height:160, phone:'081234567890'
// }).then(function(data) {
//   console.log("Success record data", data);
// }).catch(function(err) {
// console.log(err.message);
// })

//Contoh data (email, height, phone) yang tidak valid:
// db.Students.create({
//   first_name:'karina', last_name:'isumi', birthdate:'1989-01-01', email:'isumi_karina@yahoo.co.id', height:100, phone:'081234567'
// }).then(function(data) {
//   console.log("Success record data", data);
// }).catch(function(err) {
// console.log(err.message);
// })

// db.Students.getAllData()
// var all = db.Students.getAllData(function(students){
//   students.forEach(function(student) {
//     console.log("ID: "+student.id)
//     console.log("First Name: "+student.first_name)
//     console.log("Last Name: "+student.last_name)
//     console.log("Full Name: "+student.full_name)
//     console.log("Age: "+student.age)
//   })
// })
