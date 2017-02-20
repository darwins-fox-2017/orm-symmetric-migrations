"use strict"

var db = require('./models');


db.Student.destroy({
  where: {
    firstname: 'yoma'
  }
});
