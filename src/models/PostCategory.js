module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      "PostCategory",
      {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },      
    );
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        as: 'blog_posts',
        foreignKey:  'categoryId',
        otherKey: 'postId',
      })
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        as: 'categories',
        foreignKey:  'postId',
        otherKey: 'categoryId',
      })
    }
    return PostCategory
  };