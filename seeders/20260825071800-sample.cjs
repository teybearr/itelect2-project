'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        const hashedPassword = await bcrypt.hash('sample12345', 10);
    
    await queryInterface.bulkInsert('Users', [
      { email: 'althea@example.com', password: hashedPassword, role: 'member', createdAt: new Date(), updatedAt: new Date() },
      { email: 'claire@example.com', password: hashedPassword, role: 'member', createdAt: new Date(), updatedAt: new Date() }
    ]);

  const users = await queryInterface.sequelize.query(
    `SELECT id, email FROM "Users";`,
    { type: queryInterface.sequelize.QueryTypes.SELECT }
  );
  const idOf = (email) => users.find((u) => u.email === email).id;

    await queryInterface.bulkInsert('Tasks', [
        {
          title: 'Complete GT8 Activity',
          dueDate: '2026-08-26',
          completed: false,
          userId: idOf('althea@example.com'),
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          title: 'Review for Midterm Exams',
          dueDate: '2026-08-31',
          completed: true,
          userId: idOf('claire@example.com'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Edit Trailer Video',
          dueDate: '2026-08-25',
          completed: true,
          userId: idOf('althea@example.com'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Review for Quiz',
          dueDate: '2026-08-27',
          completed: true,
          userId: idOf('claire@example.com'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', { email: ['althea@example.com', 'claire@example.com'] });
  }
};