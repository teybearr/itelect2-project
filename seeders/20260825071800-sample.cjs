'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Althea', email: 'althea@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Claire', email: 'claire@example.com', createdAt: new Date(), updatedAt: new Date() }
    ]);

  const users = await queryInterface.sequelize.query(
    `SELECT id, name FROM "Users";`,
    { type: queryInterface.sequelize.QueryTypes.SELECT }
  );
  const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
        {
          title: 'Complete GT8 Activity',
          dueDate: '2026-08-26',
          completed: false,
          userId: idOf('Althea'),
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          title: 'Review for Midterm Exams',
          dueDate: '2026-08-31',
          completed: true,
          userId: idOf('Claire'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Edit Trailer Video',
          dueDate: '2026-08-25',
          completed: true,
          userId: idOf('Althea'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Review for Quiz',
          dueDate: '2026-08-27',
          completed: true,
          userId: idOf('Claire'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};