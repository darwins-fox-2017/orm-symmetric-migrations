'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({
            where: {email: value},
            attributes: ['id']
          })
          .done(function(user) {
              if (user)
                  return next('Email address already in use!');
              next();
          });
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 150
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args:[10,13],
          msg: "Phone length must be 10-13"
        },

        isNumeric: {
          msg: "Phone not allow letters"
        },
        not:{
          args: ["[a-z]",'i'],
          msg: "Phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {

      },
      getAllData: function(callback){
        Student.findAll().then(function(data){
          callback(data)
        })
      }
    },
    instanceMethods: {
      getFullName: function(){
        return (this.firstname+" "+this.lastname)
      },
      getAge: function(){
        let date = new Date(this.birthdate)
        return(Math.floor((Date.now() - date)/31536000000))
      }
    }
  });
  return Student;
};
