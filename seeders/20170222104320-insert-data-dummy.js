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
      first_name : 'Wahyu',
      last_name : 'Hidayat',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : 'Joko',
      last_name : 'Suseno',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },{
      first_name : 'Susi',
      last_name : 'Susanti',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : "adam",
      last_name : 'Sri',
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      first_name : 'Lulu',
      last_name : 'Injaya',
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
