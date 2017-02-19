'use strict';
module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define('Students', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isuniq: function(value, next) {
                  Students.find({
                      where: {
                          email: value
                      }
                  }).then(function(user) {
                      if (user) {
                          next('This email is already taken by someone')
                      } else {
                          next()
                      }
                  })
                }
            }
        },
        height: {
            type: DataTypes.INTEGER,
            validate: {
                min: 150
            }
        },
        phonenumber: {
            type: DataTypes.STRING,
            validate: {
                len: [8, 13]
            }
        },
        fullname: DataTypes.STRING

    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getAllData: function(callback) {
                var results = []
                Students.findAll().then(function(data) {
                    data.forEach(function(res) {
                        let result = {};
                        result['firstname'] = res.firstname;
                        result['lastname'] = res.lastname;
                        result['birthdate'] = res.birthdate;
                        result['fullname'] = res.getFullName();
                        results.push(result);
                    })
                    callback(results);
                })
            },
            getAgeFromData: function(callback) {
                var result = [];
                Students.findAll().then(function(currentData) {
                    currentData.forEach(function(item) {
                        let newdata = {}
                        newdata['name'] = item.getFullName();
                        newdata['age'] = item.getAge();
                        result.push(newdata);
                    })
                    callback(result);
                })

            }
        },
        instanceMethods: {
            getFullName: function() {
                return `${this.firstname} ${this.lastname} `
            },

            getAge: function() {
                let now = new Date();
                return (now.getFullYear() - this.birthdate.getFullYear());
            }

        }
    });
    return Students;
};
