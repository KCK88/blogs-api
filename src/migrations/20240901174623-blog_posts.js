'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER},
      title: {
        allowNull: false,
        type: Sequelize.STRING
        },
      content: {
          allowNull: false,
          type: Sequelize.STRING
        },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:'users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
       });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
