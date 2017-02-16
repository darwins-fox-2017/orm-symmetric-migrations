'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Students", [
      {
        firstName:"Eri",
        lastName:"Irawan",
        birthDate:new Date("1991-02-01"),
        Height:170,
        Phone:"123456789012",
        Email:"eri@email.com",
        address:"Jl.A",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        firstName:"Firman",
        lastName:"Pebrzal",
        birthDate:new Date("1993-04-07"),
        Height:170,
        Phone:"123456789012",
        Email:"firma@email.com",
        address:"Jl.B",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        firstName:"Wahyu",
        lastName:"Hidayat",
        birthDate:new Date("1994-06-12"),
        Height:170,
        Phone:"123456789012",
        Email:"wahyu@email.com",
        address:"Jl.C",
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Students", null,{})
  }
};
