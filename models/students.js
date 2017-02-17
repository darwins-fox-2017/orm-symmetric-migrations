'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
              type: DataTypes.STRING,
              unique: true,
              validate: {
                isEmail: true
              }
           },
    height: {
              type: DataTypes.INTEGER,
              validate: {
                min: 150
              }
            },
    Phone: {
            type: DataTypes.STRING,
            validate: {
              len: {args: [10, 13], msg: "Phone length must between 10 - 13"},
              isAlphanumeric: {args: true, msg: "Phone not allow alphanumeric"},
              isNumeric: {msg: "Phone not allow letter"}
            }
          },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
          Students.findAll().then(function (result) {
            result.forEach(function(output) {
              output.full_name = output.getFullName();
            })
            callback(result)
          })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return this.firstname + " " + this.lastname
      },
      getAge : function() {
        return (new Date().getFullYear() - (this.birthdate.getFullYear()))
      }
    }
  });
  return Students;
};
