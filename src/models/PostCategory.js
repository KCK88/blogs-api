module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      "PostCategory",
      {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
      },
      {
        timestamps: false,
        tableName: "postCategories",
        underscored: true,
      },      
    );
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        through: 'PostCategory',
      })
      models.BlogPost.belongsToMany(models.Category, {
        through: 'PostCategory',
      })
    }
    return PostCategory
  };