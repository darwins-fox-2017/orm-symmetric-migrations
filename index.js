"use strict"

const db = require("./models")

class Views {
  constructor() {}

  getFullName(){
    db.Student.findById(1).then(function(data){
      console.log("Name : " + data.getFullName());
    })
  }

  getAge(){
    db.Student.findById(1).then(function(data) {
      console.log("===================================");
      console.log("Age : " + data.getAge());
    })
  }

  getAllData(){
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
        // console.log(`fullName : ${data.getFullName()}`);
      })
    })
  }

  CheckValidation(){
    db.Student.create({
      Name : "Rafa Irawan",
      birthDate: "1991-12-02",
      Height:150,
      Phone : "12345678901",
      Email:"irawan@email.com",
      address:"Jl.D"
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err.message);
    })
  }

  findAll(){
    db.student.findAll().then(function(data){
      data.forEach(function(data){
        data.update({name: data.getFullName()})
      })
    })
  }

}

let run = new Views()

run.getAllData()
