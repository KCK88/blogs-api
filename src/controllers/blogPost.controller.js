const { blogPostService } = require('../services');

const createPost = async (req, res) => {
  const post = req.body;
  
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
   
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const toChange = await blogPostService.updatePost(changes, id);
  return res.status(200).json(toChange);  
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await blogPostService.deletePost(id);

  return res.status(204).send();
};

module.exports = { createPost, listPosts, findPost, updatePost, deletePost };