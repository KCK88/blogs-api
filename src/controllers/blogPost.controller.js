const { blogPostService } = require('../services');

const createPost = async (req, res) => {
  const post = req.body;
  console.log(res.locals.user.UserId);
  
  const postCrerate = await blogPostService.createPost({
    ...post, userId: res.locals.user.data.userId });
  return res.status(201).json(postCrerate);
};

module.exports = { createPost };