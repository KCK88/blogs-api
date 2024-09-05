const { BelongsToMany, HasMany } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      "BlogPost",
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      {
        timestamps: false,
        tableName: "blogPosts",
        underscored: true,
      },      
    );
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId',            
        });
    }
    return BlogPost
  };
    