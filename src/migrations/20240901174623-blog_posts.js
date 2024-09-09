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
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }
       });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('blog_posts');
  }
};
