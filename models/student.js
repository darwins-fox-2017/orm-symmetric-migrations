module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        fullname: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isuniq: function(value, next) {
                    Student.find({
                        where: {
                            email: value
                        }
                    }).then(function(user) {
                        if (user) {
                            next('already taken')
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
        phonenumber:{
          type:DataTypes.STRING,
          validate : {
            isNumeric:true,
            len:[10,13]
          }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },

            getAllData: function(callback) {
                var result = []
                Student.findAll().then(function(hasil) {
                    hasil.forEach(function(output) {
                        let hasil = {};
                        hasil['firstname'] = output.firstname;
                        hasil['lastname'] = output.lastname;
                        hasil['birthdate'] = output.birthdate;
                        hasil['fullname'] = output.getFullName();
                        result.push(hasil);
                        //console.log(output);
                    })
                    callback(result);
                })
            },

            getAgeData: function(callback) {
                var result = [];
                Student.findAll().then(function(olddata) {
                    olddata.forEach(function(olddataeach) {
                        let newdata = {}
                        newdata['name'] = olddataeach.getFullName();
                        newdata['age'] = olddataeach.getAge();
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
    return Student;
};
