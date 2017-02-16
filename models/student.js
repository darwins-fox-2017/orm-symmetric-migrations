'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    // firstName: DataTypes.STRING,
    Name:DataTypes.STRING,
    // lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    Height:{
      type:DataTypes.INTEGER,
      validate:{
        min:150,
        isNumeric:true
      }
    },
    Phone:{
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:"Phone length must be 10-13"
        },
        isNumeric:{
          args:true,
          msg:"Phone not allow letters"
        },
        isAlphanumeric:{
          args:false,
          msg:"Phone not allow alphanumeric"
        }
      }
    },
    Email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value, next){
          Student.find({
            where:{Email:value},
            attributes:["id"]
          }).done(function(user){
            if (user) {
              return next("Email address already in use")
            }
            next()
          })
        }
      }
    },
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData:function(dataStudent){
        Student.findAll().then(function(data){
          dataStudent(data)
        })
      }
    },
    instanceMethods:{
      getFullName:function(){
        // return (this.Name + " " + this.lastName)
        return (this.Name)
      },
      getAge:function() {
        let today = new Date()
        let age = today.getFullYear() - this.birthDate.getFullYear();
        let month = today.getMonth() - this.birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
         age--
       }
       return age
      }
    }
  });
  return Student;
};
