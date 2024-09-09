const { BlogPost, Category, User, PostCategory } = require('../models');

const createPost = async (post) => {
  const blogPost = {
    title: post.title,
    content: post.content,
    userId: post.userId,
  };
  const postCreated = await BlogPost.create(blogPost);

  const createIds = post.categoryIds.map((categoryId) =>
    PostCategory.create({ postId: postCreated.id, categoryId }));

  await Promise.all(createIds);
  return postCreated;
};

const listPosts = async () => {
  const postsListed = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: 'UserId' },
  });
  return postsListed;
};

const findPost = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: 'UserId' },
  });  
  return post;
};
module.exports = { createPost, listPosts, findPost };
