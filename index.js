"use strict"

let db = require("./models")
// db.Students.create({
//   firstname: "fwef",
//   lastname: "lerjgmerg",
//   birthdate: "1996-11-24",
//   email: "rtyuikl@gmail.com",
//   height: 170,
//   Phone: "0812146692919"
// }).then(function(data) {
//   console.log(data.height)
// }).catch( (err) => {
//   console.log(err.message)
// })


// db.Students.findAll().then(function(students) {
//   students.forEach(function(student) {
//     console.log("First Name :", student.firstname)
//     console.log("Last Name :", student.lastname);
//     console.log("Nama Lengkap :", student.getFullName());
//     console.log("Birth Date :", student.birthdate);
//     console.log("---", student.getAge());
//     console.log();
//   })
//
// })

db.Students.getAllData( function(data) {
  data.forEach(function(data) {
    console.log(data.id);
    console.log("Full Name :",data.full_name);
    console.log("First Name :",data.firstname);
    console.log("Last Name :",data.lastname);
    console.log("Email :",data.email);
    console.log("Phone :",data.Phone);

    console.log()
  })
})


// db.Students.find({
//   where: {id: 1}
// }).then(function(Students) {
//   console.log()
// })
