"use strict"
let db = require('./models');

// instance itu khusus untuk 1 object / array
// db.Student.findAll().then( function(result) {
//   result.forEach(function(data) {
//     console.log(data.getFullName());
//   })
// })

// db.Student.getAllData( function(data) {
//   data.forEach(function(data) {
//     console.log(data.id);
//     console.log(data.first_name);
//     console.log(data.last_name);
//     console.log(data.full_name);
//   })
// })

// db.Student.getAge( function(data) {
//   data.forEach(function(data) {
//     console.log(`Nama : ${data.first_name} ${data.last_name}`);
//     console.log(data.userAge);
//     console.log(``);
//   })
// })


db.Student.create({ first_name: 'agnes', last_name: 'lasmono', birthday: new Date('1993-04-01'), gender: 'woman', email: 'agneslasmono', height: 160, phone: '08123444'})
.then(function(task) {
  console.log('oke coy');
}).catch(function(err){
  console.log(err.message);
})
