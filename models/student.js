'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    name: DataTypes.STRING,
    email : {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Format email salah'
        }
      }
    },
    height: {
          type: DataTypes.INTEGER,
          validate: { min: 150 }
            },
    phone: {
          type: DataTypes.STRING,
          validate: {
            len: [10 - 13],
            isNumeric: false,
            isAlphanumeric: false
          }
        }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll().then(function (result) {
          result.forEach(function(output) {
            output.full_name = output.getFullName();
          })
          callback(result)
        })
      },

      getAge: function(callback) {
        Student.findAll().then(function (result) {
          result.forEach(function(output) {
            let temp = new Date(output.birthday);
            let age = 2017 - temp.getFullYear();
            output.userAge = `Umur anda saat ini ${age} tahun`;
          })
          callback(result)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      }
    }
  });
  return Student;
};

//Thu Feb 16 2017 14:02:02 GMT+0700 (WIB)
