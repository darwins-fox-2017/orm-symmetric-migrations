"use strict"

let model = require('./models')
let faker = require('faker')

function addData(firstName, lastName, birthDate, email, height, phonenumber) {
  model.Students.create({firstname: firstName, lastname: lastName, birthdate: birthDate, email: email, height: height, phonenumber: phonenumber})
  .then(function(){
    console.log(`${firstName} inserted`);
  }).catch(function(err){
    console.log(err);
    console.log(`May be there are something you mis ?`);
  })
}

function generateFakeData(amont) {
  for (let i = 0; i < amont; i++) {
    addData(faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.internet.email(), randomIntFromInterval(140, 200), faker.phone.phoneNumberFormat())
  }
}


function getAllStudentData() {
  model.Students.getAllData(function(cb){
    cb.forEach(function(res){
      console.log(res);
    })
  })
}

function getAge(){
  model.Students.getAgeFromData(function(result){
    console.log(result);
  })
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function updateStudent() {
  model.Students.update({
    lastname: 'ladlksfjkdsjfskdf dsjfasjhf ds',

  }, {
    where: {
      id: 82
    }
  })
}

// addData('diky', 'arga', 1995-10-17, 'dikyarga.id@gmail.com', 178, '0857132321331')
// generateFakeData(100)
// console.log(faker.phone.phoneNumberFormat());

// getAge()
getAllStudentData()
// updateStudent()
