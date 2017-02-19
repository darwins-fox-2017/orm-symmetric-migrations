'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students',[{
      first_name : 'Muhammad Firman',
      last_name : 'Pebrizal',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : 'Wahyu',
      last_name : 'Hidayat',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },{
      first_name : 'Dessy',
      last_name : 'Salrianty',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : 'Adam',
      last_name : 'Pamungkas',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : 'Viona',
      last_name : 'Lestari',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
