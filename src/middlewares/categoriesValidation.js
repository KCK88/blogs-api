const { Category } = require('../models');

const postValidation = async (req, res, next) => {
  const post = req.body; 
  if (!post.title || !post.content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};
const categoriesValidation = async (req, res, next) => {
  const post = req.body;  
  if (!post.categoryIds || post.categoryIds.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  try {
    const { count } = await Category.findAndCountAll({
      where: { id: post.categoryIds },
      offset: 0,
      limit: post.categoryIds.length,
    });     

    if (post.categoryIds.length !== count) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
  } catch (error) {
    error.message();
  }  
  next();
};

module.exports = { categoriesValidation, postValidation };
