'use strict'
const models = require('./models');


let coba = function(){
  return new Promise((rej,res) => {
    models.Student.findAll({
      attributes : ["id","first_name","last_name"]
    }).then(function(data){
      var willGotoPromiseAll = data.map((row)=>{
        return new Promise((resolve,reject)=>{
          models.Student.update(
            {name : row.getFullName()},
            {where : {id : row.id}}
          )
        }).then(()=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
      })
      Promise.all(willGotoPromiseAll).then(()=>{
        console.log("success");
        res()
      }).catch((err)=>{
        rej(err)
      })
    })
  })
}

coba()
