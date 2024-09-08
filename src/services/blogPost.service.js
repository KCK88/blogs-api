const { BlogPost } = require('../models');
const { Category } = require('../models');

const createPost = async (post) => {
  console.log(post.userId);
  
  const blogPost = {
    title: post.title,
    content: post.content,
    id: post.userId,
  };
  const postCrerate = await BlogPost.create({ ...blogPost });

  const categories = {
    categoryIds: post.categoryIds,
  };
  const postCategories = await Category.create({ categories });
  return postCrerate && postCategories;
};

module.exports = { createPost };