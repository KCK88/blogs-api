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
        foreignKey:  'postId',
        otherKey: 'categoryId',
      })
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        as: 'categories',
        foreignKey:  'categoryId',
        otherKey: 'postId',
      })
    }
    return PostCategory
  };