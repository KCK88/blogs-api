const { BlogPost } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');

const createPost = async (post) => { 
  const blogPost = {
    title: post.title,
    content: post.content,
    userId: post.userId,
  };
  const postCrerate = await BlogPost.create(blogPost);
  const categories = await Category.findAll({ where: { id: post.categoryIds } });
  console.log(postCrerate);
  
  return postCrerate;
};

const listPosts = async () => {
  const postsListed = await BlogPost.findAll(
    { include: [{ model: User, as: 'users' }, 
      { model: Category, as: 'categories', through: { attributes: ['id', 'name'] } }] },
  );

  const filteredPosts = postsListed.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
    published: post.published,
    updated: post.updated,
    user: { ...post.users.dataValues, password: undefined },
    categories: post.categories.map((category) => ({ id: category.id, name: category.name })),
  }));
  
  return filteredPosts;
};

const findPost = async (id) => {
  const post = await BlogPost.findByPk(
    id,
    { include: { model: User, as: 'users' }, 
      model: Category, 
      as: 'categories', 
      through: { atributes: ['id', 'name'] } },
  );

  const filteredPost = {
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
    published: post.published,
    updated: post.updated,
    user: { ...post.users.dataValues, password: undefined },
    categories: post.categories.map((category) => ({ id: category.id, name: category.name })),
  };
  return filteredPost;
};
module.exports = { createPost, listPosts, findPost };