const { BlogPost, User } = require('../models');

const validatePostFields = async (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  const userToken = res.locals.user.data.userId;

  const idFromDB = await BlogPost.findByPk(id, {
    include: 
    { model: User, as: 'user', attributes: { exclude: 'password' } },
  });
  
  if (!changes.title || !changes.content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (userToken !== idFromDB.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  next();
};

module.exports = { validatePostFields };