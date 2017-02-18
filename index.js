'use strict'
"use strict"
let  model = require('./models');

function insertdata(firstName,lastName,birthDate,Email,Height,phoneNumber){
  model.Student.create({firstname:firstName,lastname:lastName, birthdate:birthDate,email :Email,height:Height,phonenumber:phoneNumber}).
  then(function(){
    console.log('data inserted');
  }).catch(function(err){
    console.log('tinggi kurang/ email tidak sesuai / email sudah terdaftar / nomor hp kurang');
  });
}

function getalldata(){
  model.Student.getAllData(function(callback){
    callback.forEach(function(hasil){
      console.log(hasil);
    })
  });
}

function getage(){
  model.Student.getAgeData(function(result){
    console.log(result);
  })
}

function createfullname(){
  model.Student.findAll().then(function(students) {
      students.forEach(function(student) {
          let newstudent = {};
          newstudent['id'] = student.id;
          newstudent['fullname'] = student.getFullName();
          model.Student.update({
            fullname:newstudent.fullname
          },{
            where:{
              id:newstudent.id
            }
          })
      })
  })
}

//createfullname();
