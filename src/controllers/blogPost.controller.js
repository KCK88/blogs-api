const { blogPostService } = require('../services');

const createPost = async (req, res) => {
  const post = req.body;
  console.log(res.locals.user.userId);
  
  const postCrerate = await blogPostService.createPost({
    ...post, userId: res.locals.user.data.userId });
  return res.status(201).json(postCrerate);
};

const listPosts = async (req, res) => {
  const postsLists = await blogPostService.listPosts();
  return res.status(200).json(postsLists);
};

const findPost = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.findPost(id);
  return res.status(200).json(post);
};

module.exports = { createPost, listPosts, findPost };