'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', { 
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model:'blog_posts',
          key: 'id',
        },
        },
      categoryId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};
