'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin12345', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@user.test',
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { email: 'admin@user.test' });
  },
};
