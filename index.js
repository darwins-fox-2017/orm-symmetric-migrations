"use strict"

const db = require("./models")

//getFullName
// db.Student.findById(1).then(function(data){
//   console.log("Name : " + data.getFullName());
// })

//getAge
// db.Student.findById(1).then(function(data) {
//   console.log("===================================");
//   console.log("Age : " + data.getAge());
// })

//getAllData
db.Student.getAllData(function(dataStudent){
  console.log("===============get All Data=================");
  dataStudent.forEach(function(data) {
    console.log(`ID        : ${data.id}`);
    console.log(`Name      : ${data.Name}`);
    console.log(`birthDate : ${data.birthDate}`);
    console.log(`Age       : ${data.getAge()}`);
    console.log(`Height    : ${data.Height}`);
    console.log(`Phone     : ${data.Phone}`);
    console.log(`Email     : ${data.Email}`);
    console.log(`Address   : ${data.address}\n`);
  })
})

//Check Validation
// db.Student.create({
//   Name : "Rafa Irawan",
//   birthDate: "1991-12-02",
//   Height:150,
//   Phone : "12345678901",
//   Email:"irawan@email.com",
//   address:"Jl.D"
// }).then(function(data) {
//   console.log(data);
// }).catch(function(err) {
//   console.log(err.message);
// })

//Untuk mendapatkan fullname yang nantinya akan dimasukan ke field Name
db.Student.findAll().then(function(data){
  data.forEach(function(data){
    data.update({Name:data.getFullName()})
  })
})

// db.student.findAll().then(function(data){
//   data.forEach(function(data){
//     data.update({name: data.getFullName()})
//   })
// })
