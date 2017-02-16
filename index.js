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
    console.log(`ID : ${data.id}`);
    console.log(`firstName : ${data.firstName}`);
    console.log(`lastName  : ${data.lastName}`);
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
//   firstName : "Rafa",
//   lastName : "Irawan",
//   birthDate: "1991-12-02",
//   Height:150,
//   Phone : "12345678901234534345",
//   Email:"rafa@email.com"
// }).then(function(data) {
//   console.log(data);
// }).catch(function(err) {
//   console.log(err.message);
// })
