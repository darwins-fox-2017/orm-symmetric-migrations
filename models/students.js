'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    // first_name: DataTypes.STRING,
    // last_name: DataTypes.STRING,
    // birthdate: DataTypes.DATE,
    // email:
    //   {
    //     type: DataTypes.STRING,
    //     validate: {
    //       isEmail: {args: true, msg: "Please insert correct email!"},
    //       isUnique: function(value, next) {
    //         Students.find({where: {email:value}, attributes:['id']}).done(function(err,data){
    //           if(err) {
    //             return next(err)
    //           }
    //           if(data){
    //             return next({msg: "Email already in use"})
    //           }
    //         next()
    //         })
    //       }
    //     }
    //   },
    //   height:{
    //     type: DataTypes.INTEGER,
    //     validate: {
    //       min: 150
    //     }
    //   },
    //   phone:
    //   {
    //     type: DataTypes.STRING,
    //     validate: {
    //       len: {args: [10,13], msg: "Phone number only allow values with length 10 until 13"},
    //       isAlphanumeric: {args: true, msg: "Phone number not allow with alphanumeric"},
    //       isNumeric: {args: true, msg: "Phone number not allow with letters"}
    //       }
    //   }
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        },
        // getAllData: function(cb) {
        //   Students.findAll().then(function(data){
        //     let temp = []
        //     data.forEach(function(item){
        //       temp.push({
        //         id: item.id,
                // first_name: item.first_name,
                // last_name: item.last_name,
        //         full_name: item.getFullName(),
        //         age: item.getAge()
        //       })
        //     })
        //     cb(temp)
        //   })
        // }
      },
      instanceMethods: {
        getFullName: function() {
          return `${this.name}`
        },
        //
        // getAge: function() {
        //   let now = new Date()
        //   let year = now.getFullYear()
        //   let ageStudent = year - this.birthdate.getFullYear()
        //   return ageStudent
        // }
      }
    });
    return Students;
  };
